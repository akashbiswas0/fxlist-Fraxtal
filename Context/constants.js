import { ethers } from "ethers";
import Web3Modal from "web3modal";

import ERC20Generator from "./ERC20Generator.json";
import icoMarketplace from "./icoMarketplace.json";

export const ERC20Generator_ABI = ERC20Generator.abi;
export const ERC20Generator_BYTECODE = ERC20Generator.bytecode;

export const ICO_MARKETPLACE_ADDRESS =
  process.env.NEXT_PUBLIC_ICO_MARKETPLACE_ADDRESS;
export const ICO_MARKETPLACE_ABI = icoMarketplace.abi;

//PINATA KEYS
export const PINATA_AIP_KEY = process.env.NEXT_PUBLIC_PINATA_AIP_KEY;
export const PINATA_SECRECT_KEY = process.env.NEXT_PUBLIC_PINATA_SECRECT_KEY;




export const shortenAddress = (address) =>
  `${address?.slice(0, 5)}...${address?.slice(address.length - 4)}`;

//CONTRACT
//---FETCHING SMART CONTRACT
const fetchContract = (address, abi, signer) =>
  new ethers.Contract(address, abi, signer);

export const ICO_MARKETPLACE_CONTARCT = async () => {
  try {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const contract = fetchContract(
      ICO_MARKETPLACE_ADDRESS,
      ICO_MARKETPLACE_ABI,
      signer
    );
    return contract;
  } catch (error) {
    console.log("Something went wrong while connecting with contract", error);
  }
};

export const TOKEN_CONTARCT = async (TOKEN_ADDRESS) => {
  try {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const contract = fetchContract(TOKEN_ADDRESS, ERC20Generator_ABI, signer);
    return contract;
  } catch (error) {
    console.log("Something went wrong while connecting with contract", error);
  }
};
