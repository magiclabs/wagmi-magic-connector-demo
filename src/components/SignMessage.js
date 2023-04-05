import { useSignMessage } from "wagmi";

const SignMessage = () => {
  const { data, isError, isLoading, isSuccess, signMessage } = useSignMessage({
    message: "Good morning!",
  });

  return (
    <div>
      <button disabled={isLoading} onClick={() => signMessage()}>
        Sign message
      </button>
      {isSuccess && <div>Signature: {data}</div>}
      {isError && <div>Error signing message</div>}
    </div>
  );
};

export default SignMessage;
