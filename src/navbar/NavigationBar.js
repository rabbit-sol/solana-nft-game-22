import { Container, Dropdown, DropdownButton, Nav, Navbar } from "react-bootstrap";
import { WalletMultiButton, } from "@solana/wallet-adapter-react-ui";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";


const Navigationbar = (props) => {


  function onChange(val){

    if(val==="devnet"){
        props.setNetwork(WalletAdapterNetwork.Devnet);
        props.setTitle("Devnet");
        props.setVariant("primary");
    } else if(val==="testnet"){
        props.setNetwork(WalletAdapterNetwork.Testnet);
        props.setTitle("Testnet");
        props.setVariant("warning");
    } else if(val==="mainnet"){
        props.setNetwork(WalletAdapterNetwork.Devnet);
        props.setTitle("Mainnet");
        props.setVariant("success");
    }
    
  }

  return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "black" }}>
      <Container>
        <Navbar.Brand href="#home" style={{ color: "#fff" }}>
          Solana NFT Game
        </Navbar.Brand>
        <Nav>
            <WalletMultiButton className="wallet-btn" />
        </Nav>        
      </Container>
    </Navbar>
  );
};
export default Navigationbar;
