import { parseEther } from "ethers/lib/utils.js";
import { useState } from "react";
import {
  useSendTransaction,
  usePrepareSendTransaction,
  useWaitForTransaction,
} from "wagmi";
import { useDebounce } from "use-debounce";

const SendTransaction = () => {
  const [address, setAddress] = useState(
    "0x8bdCE5551B544AF8dFfB09Ff34c34da7FC241Bd0"
  );
  const [debouncedAddress] = useDebounce(address, 500);
  const [amount, setAmount] = useState("0.01");
  const [debouncedAmount] = useDebounce(amount, 500);

  const { config, error } = usePrepareSendTransaction({
    request: {
      to: debouncedAddress,
      value: debouncedAmount ? parseEther(debouncedAmount) : undefined,
    },
  });

  const { data, sendTransaction } = useSendTransaction(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });
  console.log(config);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendTransaction?.();
        }}
      >
        <input
          value={address}
          placeholder="Receiving Address"
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          value={amount}
          placeholder="Amount of ETH"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          disabled={isLoading || !sendTransaction || !address || !amount}
          type="submit"
        >
          {isLoading ? "Sending..." : "Send"}
        </button>
        {isSuccess && (
          <div>
            Successfully sent {amount} ether to {address}. View transaction on{" "}
            <a
              href={`https://goerli.etherscan.io/tx/${data?.hash}`}
              target="_blank"
              rel="noreferrer"
            >
              Etherscan
            </a>
          </div>
        )}
        {error && (
          <div>
            An error occurred preparing the transaction: {error.message}
          </div>
        )}
      </form>
    </div>
  );
};

export default SendTransaction;
