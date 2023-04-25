import errorPic from "../assets/img/errorPic.jpg";
import { useRouteError } from "react-router-dom";
const Error=()=>{
    const err=useRouteError();
    console.log(err);
    return (
        <div>
            <h1>OOPS..!!!</h1>
            <h2>Something went wrong..!!!</h2>
            <img src={errorPic}></img>
            {/* {errorPic}this wont work */}
            <h2>
                Error {err.status+" ; "+err.statusText}
            </h2>
        </div>
    )
}
export default Error;