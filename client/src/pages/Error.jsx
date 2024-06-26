import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="text-4xl w-screen h-screen flex flex-col justify-center items-center gap-4">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>404! {error.statusText || error.message}</i>
      </p>
    </div>
  );
}