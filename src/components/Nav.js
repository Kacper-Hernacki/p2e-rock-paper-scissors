import React from "react";
import Counter from "./Counter";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Nav() {
  const [walletAddress, setWalletAddress] = useState("");

  const connectWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        /* MetaMask is installed */
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };

  const getCurrentWalletConnected = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          console.log(accounts[0]);
        } else {
          console.log("Connect to MetaMask using the Connect button");
        }
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };

  const addWalletListener = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      window.ethereum.on("accountsChanged", (accounts) => {
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      });
    } else {
      /* MetaMask is not installed */
      setWalletAddress("");
      console.log("Please install MetaMask");
    }
  };

  useEffect(() => {
    getCurrentWalletConnected();
    addWalletListener();
  }, [walletAddress]);

  return (
    <Navbar>
      <Counter />
      {walletAddress && walletAddress.length > 0 ? (
        <WalletDetails>
          Connected:
          <p>
            {walletAddress.substring(0, 6)}...
            {walletAddress.substring(38)}
          </p>
        </WalletDetails>
      ) : (
        <AuthButton onClick={connectWallet}>"Connect Wallet"</AuthButton>
      )}
    </Navbar>
  );
}

const Navbar = styled.nav`
  position: absolute;
  top: 0;
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: aliceblue;
`;

const WalletDetails = styled.span`
  display: flex;

  p {
    font-weight: bold;
    margin-left: 6px;
  }
`;

const AuthButton = styled.button``;
