import { useRouteError } from "react-router";
export default function ErrorPage() {
  const err = useRouteError();

  return (
    <>
      <div className="error">
        <h1>Oops..!</h1>
        <h3>Some went wrong in your page.</h3>
        <b>
          {err.status} : {err.statusText}
        </b>
      </div>
    </>
  );
}
