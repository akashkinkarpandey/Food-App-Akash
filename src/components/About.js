import { Outlet } from "react-router-dom"
import Profile from "./ProfileClass"
import ProfileFunctionalComponent from "./Profile"
import React,{Component} from "react"
import UserContext from "../utils/UserContext"
class About extends React.Component{
  constructor(props)
  {
    super(props);
    console.log('Parent constructor called')
  }
  componentDidMount()
  {
    //best place  to make api call
    // this.timer=setInterval(()=>{
    //   console.log('Namaste React')
    // },1000);
    console.log('Parent componentDidMount called')
  }
  componentWillUnmount()
  {
    // clearInterval(this.timer);
    console.log('Parent- componentWillUnmount')
  }
  render()
  {
    console.log('Parent render called')
    return (
      <div>
          <h1>About us Page</h1>
          <UserContext.Consumer>
            {({user})=><h4 className="font-bold text-xlp-10">{user.name}-{user.email}</h4>}
          </UserContext.Consumer>
          <p>This is the Namaste React live course</p>
          {/* <ProfileFunctionalComponent name={"Akash"}/> */}
          <Profile name={"First Child"} />
      </div>
    )
  }
}

export default About;