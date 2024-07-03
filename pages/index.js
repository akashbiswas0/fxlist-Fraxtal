import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

//INTERNAL IMPORT
import { useStateContext } from "../Context/index";
import Header from "../Components/Header";

import Loader from "../Components/Loader";
import Footer from "../Components/Footer";

const index = () => {
  const {
    createERC20,
    connectWallet,
    address,
    shortenAddress,
    GET_ALL_PRESALE_TOKENS,
    GET_ALL_USER_PRESALE_TOKENS,
    createICOSale,
    buyToken,
    transferTokens,
    withdrawToken,
    ICO_MARKETPLACE_ADDRESS,
    loader,
    setLoader,
    reCall,
    accountBalance,
    setAddress,
    openBuyToken,
    setOpenBuyToken,
    openWidthdrawToken,
    setopenWidthdrawToken,
    openTransferToken,
    setOpenTransferToken,
    openTokenCreator,
    setOpenTokenCreator,
    openCreateICO,
    setOpenCreateICO,
    currency,
    PINATA_AIP_KEY,
    PINATA_SECRECT_KEY,
  } = useStateContext();

  const notifySuccess = (msg) => toast.success(msg, { duration: 2000 });
  const notifyError = (msg) => toast.error(msg, { duration: 2000 });

  const [allICOs, setAllICOs] = useState();
  const [allUserIcos, setAllUserIcos] = useState();

  //OPEN COMPONENT STATE
  const [openAllICO, setOpenAllICO] = useState(false);
  const [openTokenHistory, setOpenTokenHistory] = useState(false);

  const [openICOMarketplace, setOpenICOMarketplace] = useState(false);

  //BUY ICO TOKEN
  const [buyIco, setBuyIco] = useState();

  const copyAddress = () => {
    navigator.clipboard.writeText(ICO_MARKETPLACE_ADDRESS);
    notifySuccess(" Copied successfully");
  };

  useEffect(() => {
    if (address) {
      GET_ALL_PRESALE_TOKENS().then((token) => {
        console.log(token);
        setAllICOs(token);
      });
      GET_ALL_USER_PRESALE_TOKENS().then((token) => {
        console.log(token);
        setAllUserIcos(token);
      });
    }
  }, [address, reCall]);

  return (
    <div>
      {/* //HEADER */}
      <Header
        accountBalance={accountBalance}
        setAddress={setAddress}
        address={address}
        connectWallet={connectWallet}
        ICO_MARKETPLACE_ADDRESS={ICO_MARKETPLACE_ADDRESS}
        shortenAddress={shortenAddress}
        setOpenAllICO={setOpenAllICO}
        openAllICO={openAllICO}
        setOpenTokenCreator={setOpenTokenCreator}
        openTokenCreator={openTokenCreator}
        setOpenTokenHistory={setOpenTokenHistory}
        openTokenHistory={openTokenHistory}
        setOpenICOMarketplace={setOpenICOMarketplace}
        openICOMarketplace={openICOMarketplace}
      />
      

      <Footer />
      {loader && <Loader />}
    </div>
  );
};

export default index;
