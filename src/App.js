import { loadStdlib } from "@reach-sh/stdlib";
import { ALGO_WalletConnect } from "@reach-sh/stdlib"
import * as backend from './build/index.main.mjs';
import { useState } from "react";

const stdlib = loadStdlib("ALGO")
let acc

function App() {

  const connectWallet = async () => {
    stdlib.setWalletFallback(stdlib.walletFallback(
      {
          providerEnv: {
              ALGO_TOKEN: '',
              ALGO_SERVER: "https://testnet-api.algonode.cloud",
              ALGO_PORT: '',
              ALGO_INDEXER_TOKEN: '',
              ALGO_INDEXER_SERVER: "https://testnet-idx.algonode.cloud",
              ALGO_INDEXER_PORT: '',
          },
          WalletConnect: ALGO_WalletConnect,
      }
    ))
    acc = await stdlib.getDefaultAccount()
    setView(1)
    setStatus("")
  }

  const howManyAttached = async (ctc) => { // get contract view as in rsh file
    let check = JSON.parse(JSON.stringify(await ctc.views.howManyAttached()))[1]
    if (check !== null) check = parseInt(check.hex, 16)
    return check
  }

  const newContract = async () => {
    setStatus("Please sign the transaction to deploy the contract.")
    const aliceCtc = acc.contract(backend)
    await stdlib.withDisconnect(() =>
        aliceCtc.p.Alice({
            ready: stdlib.disconnect,
        })
    )
    const ctcID = parseInt((await aliceCtc.getInfo())._hex, 16)
    setStatus("The contract is deployed as: " + ctcID)
  }


  const attach = async () => {
    const ctcInfo = Number(window.prompt("Enter the contract ID below:"))
    const ctc = acc.contract(backend, ctcInfo)
    setStatus("New attacher: Please sign the transaction.")
    try {
      await ctc.apis.Bobs.attach()
      setStatus(await howManyAttached(ctc) + " person(s) have now attached.")
    } catch (e) {
      const errMsg = JSON.stringify(e.message)
      console.log(errMsg)
      if (errMsg.includes("API called in the wrong state")) {
        setStatus("The maximum of 5 attachers has been reached!")
      } else if (errMsg.includes("check")) {
        setStatus("Error: You have already attached!")
      } else {
        setStatus("Error: The contract either does not exist, or has terminated.")
      }
    }
  }

  const terminate = async () => {
    const ctcInfo = Number(window.prompt("Enter the contract ID below:"))
    const ctc = acc.contract(backend, ctcInfo)
    setStatus("Please sign the transaction.")
    try {
      await ctc.apis.AliceAPI.end()
      setStatus("Contract terminated.")
    } catch {
      setStatus("The contract may not be terminated at this time. " + await howManyAttached(ctc) + " people left.")
    }
  }

  const reload = () => {
    localStorage.clear()
    window.location.reload()
  }

  const [view, setView] = useState(0)
  const [status, setStatus] = useState("Please connect your wallet.")

  return (
    <div className="App" style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
      {
        (view === 0) &&
        <button className="button-1" onClick={connectWallet}>Connect Wallet</button>
      }
      {
        (view === 1) &&
        <div style={{display: "flex"}}>
          <button className="button-2" onClick={newContract}>Deploy New Contract</button>
          <button className="button-2" onClick={attach}>Attach to Contract</button>
          <button className="button-2" onClick={terminate}>Terminate Contract (Deployer Only)</button>
          <button className="button-2" onClick={reload}>Disconnect</button>
        </div>
      }
      <h1>{status}</h1>
    </div>
  );
}

export default App;
