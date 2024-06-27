import React, { useState, useEffect } from "react";

import Input from "./Input";
import Button from "./Button";

const WidthdrawToken = ({
  address,
  connectWallet,
  withdrawToken,
  setopenWidthdrawToken,
}) => {
  const [withdrawQuentity, setWithdrawQuentity] = useState({
    token: "",
    amount: "",
  });
  return (
    <div class="modal">
      <div class="modal-content">
        <span onClick={() => setopenWidthdrawToken(false)} class="close">
          &times;
        </span>
        <h2 style={{ marginTop: "2rem" }}>Withdraw Token</h2>
        <div className="input-Container">
          <Input
            placeholder={"token address"}
            handleChange={(e) =>
              setWithdrawQuentity({
                ...withdrawQuentity,
                token: e.target.value,
              })
            }
          />
          <Input
            placeholder={"amount"}
            handleChange={(e) =>
              setWithdrawQuentity({
                ...withdrawQuentity,
                amount: e.target.value,
              })
            }
          />
        </div>
        <div className="button-box" style={{ marginTop: "1rem" }}>
          {address ? (
            <Button
              name={"Withdraw Token"}
              handleClick={() => withdrawToken(withdrawQuentity)}
            />
          ) : (
            <Button
              name={"Connect Wallet"}
              handleClick={() => connectWallet()}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default WidthdrawToken;
