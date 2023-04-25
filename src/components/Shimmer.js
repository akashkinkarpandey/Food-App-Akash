const Shimmer=()=>{
    return(
        <div data-testid="shimmer">
            {Array(10).fill("").map((e,ind)=><div className="shimmer-card" key={ind}></div>)}
            {/* <h1>Shimmer UI Loading....</h1> */}
        </div>
    );
};
export default Shimmer;
