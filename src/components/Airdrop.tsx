import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { useState } from "react";

export default function Airdrop(){
    const wallet = useWallet();
    const {connection} = useConnection()
    const [amount, setAmount] = useState(0)

    async function sendAirdropToUser(){
        const publicKey = wallet.publicKey
        if(publicKey){
            await connection.requestAirdrop(publicKey, amount*1000000000)
            alert(`Airdropped ${amount} Sol`)
        }
    }

    return (
        <>
        <input onChange={e=>{
            setAmount(Number(e.target.value))
        }} type="number" placeholder="Enter the amount you need to be airdropped"/>
        <button onClick={sendAirdropToUser}>Airdrop</button>
        </>
    )
}