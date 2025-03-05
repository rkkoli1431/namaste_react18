import React from "react";
import { json } from "react-router-dom";
class UserClass extends React.Component{
    constructor(props){
        super(props);

      this.state = {
        userInfo:{
            name: "Dummy",
            location: "Default",
            avatar_url: "https://avatars.com",
        }
      }
        
    }
   async componentDidMount(){
     //   console.log("Child Component Did Mount")
     const data = await fetch("https://api.github.com/users/rkkoli1431");
     const json = await data.json();
     console.log(json);
     this.setState({
        userInfo: json,
     })
    }
    render(){
        const {name,location,avatar_url} = this.state.userInfo;
        console.log("Child Render")
        return(
            <div className="w-full fixed top-40 left-0 z-50 ">
                <img src={avatar_url}/>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
            </div>
        )
    }
}

export default UserClass;