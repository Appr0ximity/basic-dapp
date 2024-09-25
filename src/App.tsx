import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';
import Airdrop from './components/Airdrop';
import Balance from './components/Balance';

function App() {

  return (
    <>
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/rIa2hNz5bUmAuMVoe0uzw_bQ7RFTGbV7"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <WalletMultiButton></WalletMultiButton>
          <WalletDisconnectButton></WalletDisconnectButton>
          <Airdrop></Airdrop>
          <Balance></Balance>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
    </>
  )
}

export default App
