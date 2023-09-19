import { useRouteError } from "react-router-dom";
import ErrorButton from "../components/ErrorButton";

function Error() {
  const error = useRouteError();

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-8 bg-slate-500 font-mono text-3xl font-bold uppercase">
      <h1>❌❌❌ Ooops, Something went wrong 😢</h1>
      <p>{error.data || error.status_message}</p>

      <ErrorButton>&larr; Go back</ErrorButton>
    </div>
  );
}

export default Error;
