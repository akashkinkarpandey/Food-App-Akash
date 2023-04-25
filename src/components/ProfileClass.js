import React from "react";

class ProfileClass extends React.Component{
    constructor(props)
    {
        super(props);
        //Create state
        this.state={
            userinfo:{
              name:"Dummy Name",
              location:"Dummy Location"
            }
          }
        console.log('Child Constructor '+this.props.name)
    }
    async componentDidMount()
    {
        //API Calls
        console.log('Child Entering Mount..')
        const data=await fetch("https://api.github.com/users/akashkinkarpandey")
        const json=await data.json()
        console.log(json)
        this.setState({
            userinfo:json,
        })
        //setUserInfo(json)
        console.log('Child componentDidMount '+this.props.name)
    }
    componentDidUpdate()
    {
        console.log('componentDidUpdate');
    }
    componentWillUnmount()
    {
        console.log('componentWillUnmount child')
    }
render(){
    console.log('Child Render '+this.props.name)
    return (
    <div>
        <h1>Profile Class Component</h1>
        <img src= {this?.state?.userinfo.avatar_url}/>
        <h2>Name : {this?.state?.userinfo?.name}</h2>
        <h2>Location : {this?.state?.userinfo?.location}</h2>
    </div>
    )
}
}
export default ProfileClass;