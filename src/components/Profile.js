import { useState,useEffect } from "react";
const Profile=(props)=>{
    const [count,setCount]=useState(0);
    useEffect(
        ()=>{
            console.log('use effect starts')
            const timer=setInterval(()=>{
                console.log('Namaste React');
              },1000);
              return ()=>{
                clearInterval(timer);
                console.log('use effect returned');
              }
        }
        ,[]
    );
    return (
        <div>
            <h1>Profile Component</h1>
            <h3>Name: {props.name}</h3>
            <h3>Count:{count}</h3>
            <button onClick={()=>setCount(1-count)}>Count</button>
        </div>
    )
}
export default Profile;