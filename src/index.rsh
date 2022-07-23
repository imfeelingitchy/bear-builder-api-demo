'reach 0.1'
'use strict'

export const main = Reach.App(() => {
  setOptions({untrustworthyMaps: true})

  const Alice = Participant('Alice', {
    ready: Fun([], Null)
  })

  const Bobs = API('Bobs', {
    attach: Fun([], Null),
  })

  const AliceAPI = API('AliceAPI', {
    end: Fun([], Null),
  })

  const vMain = View({howManyAttached: UInt})

  init()
  Alice.publish()
  Alice.interact.ready()

  const deployerAddress = this
  const addresses = new Set()

  const howMany = parallelReduce(0)
    .define(() => {vMain.howManyAttached.set(howMany)})
    .invariant(balance() == 0)
    .while(howMany < 5)
    .api(Bobs.attach,
      () => {check(!addresses.member(this))},
      () => 0,
      (k) => {
        check(!addresses.member(this))
        k(null)
        addresses.insert(this)
        return howMany + 1
      }
    )

    vMain.howManyAttached.set(howMany)
    commit()

    const [[], k2] = call(AliceAPI.end)
    .check(() => {check(this == deployerAddress)})
    k2(null)

    commit()
    exit()
    
});
