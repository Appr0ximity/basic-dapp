import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export default function Balance (){
    const {connection} = useConnection()
    const wallet = useWallet()
    
    async function getBal(){
        if(wallet.publicKey){
            const bal = await connection.getBalance(wallet.publicKey)
            let balanceDiv = document.getElementById("balance")
            if(balanceDiv){
                balanceDiv.innerHTML = (bal/LAMPORTS_PER_SOL).toString()
            }
        }
    }
    getBal()
    return <div>
        <p>Sol Balance: </p><div id="balance"></div>
        <button onClick={getBal}>Refresh Balance</button>
    </div>
}