import React, { useState, useEffect } from "react";

const Card = ({
  setOpenAllICO,
  setOpenTokenCreator,
  setOpenTokenHistory,
  setOpenICOMarketplace,
  setopenWidthdrawToken,
  setOpenTransferToken,
  copyAddress,
  setOpenCreateICO,
}) => {
  const features = [
    {
      title: "ICO ADDRESS",
      description:
        "Get Detail of ICO Contract and copy the ico contract address to transfer the token for ICO Contract",
      btnName: "Copy Address",
    },
    {
      title: "Create ICO",
      description:
        "Get Detail of ICO Contract and copy the ico contract address to transfer the token to ICO Contract",
      btnName: "Create ICO",
    },
    {
      title: "Your Created ICO",
      description:
        "Get All Your Created ICO is an innovative platform designed for managing and tracking your own Initial Coin Offerings (ICOs)",
      btnName: "Get All Created ICO",
    },
    {
      title: "ICO Marketplace",
      description:
        "Get All Created ICO is a comprehensive platform providing detailed information on Initial Coin Offerings (ICOs) worldwide",
      btnName: "Listed ICOs",
    },
    {
      title: "Create Token",
      description:
        "Creating a token that represents share on your organisation ",
      btnName: "Create Token",
    },
    {
      title: "History",
      description:
        " logs the history of token creation by a user",
      btnName: "Get Token History",
    },
    {
      title: "Transfer Token",
      description:
        "you can also send token directly to ico contract adress through your wallet",
      btnName: "Transfer Token",
    },
    {
      title: "Widthdraw Token",
      description:
        "to reduce the number of token in supply potentially increasing proce of each share/token",
      btnName: "Widthdraw Token",
    },
  ];
  return (
    <>
      <div class="wrapper">
        {features.map((feature, index) => (
          <div key={index} class="card">
            <h3 class="card-title">{feature.title}</h3>
            <p class="card-content" style={{ marginTop: "1rem" }}>
              {feature.description}
            </p>
            <button
              onClick={() =>
                feature.title == "Your Created ICO"
                  ? setOpenAllICO(true)
                  : feature.title == "ICO Marketplace"
                  ? setOpenICOMarketplace(true)
                  : feature.title == "Create Token"
                  ? setOpenTokenCreator(true)
                  : feature.title == "History"
                  ? setOpenTokenHistory(true)
                  : feature.title == "Transfer Token"
                  ? setOpenTransferToken(true)
                  : feature.title == "Widthdraw Token"
                  ? setopenWidthdrawToken(true)
                  : feature.title == "ICO ADDRESS"
                  ? copyAddress(true)
                  : feature.title == "Create ICO"
                  ? setOpenCreateICO(true)
                  : ""
              }
              style={{ marginTop: "1rem" }}
              class="card-btn"
            >
              {feature.btnName}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
