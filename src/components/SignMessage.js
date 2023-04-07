import { useState } from "react";
import { useSignMessage } from "wagmi";

const SignMessage = () => {
  const [message, setMessage] = useState("");
  const { data, isError, isLoading, isSuccess, signMessage } = useSignMessage({
    message,
    onSuccess(data) {
      console.log("Success: ", data);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    signMessage();
    setMessage("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your message..."
        />
        <button disabled={isLoading} type="submit">
          Sign message
        </button>
      </form>
      {isSuccess && <div>Signature: {data}</div>}
      {isError && <div>Error signing message</div>}
    </div>
  );
};

export default SignMessage;
