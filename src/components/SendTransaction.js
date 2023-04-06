import { parseEther } from "ethers/lib/utils.js";
import { useState } from "react";
import { useSendTransaction, usePrepareSendTransaction } from "wagmi";

const SendTransaction = () => {
  const [sendAddress, setSendAddress] = useState("");
  const [sendAmount, setSendAmount] = useState("0.01");
  const { config, error, isLoading } = usePrepareSendTransaction({
    request: {
      to: sendAddress,
      value: parseEther(sendAmount),
    },
  });
  const { sendTransaction } = useSendTransaction(config);
  console.log(config);

  const handleSendTransaction = (e) => {
    e.preventDefault();
    sendTransaction?.();
  };

  return (
    <div>
      <form>
        <input
          value={sendAddress}
          placeholder="Receiving Address"
          onChange={(e) => setSendAddress(e.target.value)}
        />
        <input
          value={sendAmount}
          placeholder="Amount of ETH"
          onChange={(e) => setSendAmount(e.target.value)}
        />
        <button
          disabled={!SendTransaction}
          onSubmit={handleSendTransaction}
          type="submit"
        >
          Send Transaction
        </button>
      </form>
      {error && (
        <div>An error occurred preparing the transaction: {error.message}</div>
      )}
      {isLoading && <div>Sending transaction...</div>}
    </div>
  );
};

export default SendTransaction;
