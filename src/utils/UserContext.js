import { createContext } from "react";
const UserContext=createContext({user:{
    name:"Akash Kinkar Pandey",
    email:"akashkinkarpandey@gmail.com"
}});
UserContext.displayName=UserContext;
export default UserContext;