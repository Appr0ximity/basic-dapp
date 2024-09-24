import { useConnection, useWallet } from "@solana/wallet-adapter-react"

export default function Airdrop(){
    const wallet = useWallet();
    const {connection} = useConnection()

    async function sendAirdropToUser(){
        const publicKey = wallet.publicKey
        if(publicKey){
            await connection.requestAirdrop(publicKey, 100000000)
            alert("Airdropped Sol")
        }
    }

    return (
        <>
        <input type="number" placeholder="Enter the amount you need to be airdropped"/>
        <button onClick={sendAirdropToUser}>Airdrop</button>
        </>
    )
}