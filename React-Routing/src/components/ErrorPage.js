import { useRouteError } from "react-router";
export default function ErrorPage(){
    const error=useRouteError();

    console.log(error);
    return(
        <>
            <h2>Oops.. Something went wrong over there.</h2>
            <h4>{error.status} - {error.statusText}</h4>
        </>
    )
}