import User from "./User";
import {Component} from "react";
import UserClass from "./UserClass";


class About extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
   // console.log("Parent Component Did Mount");
  }
  render(){
  //  console.log("Parent Render");
    return (
      <div className="about">
        <User name={"Rupali"}/>
        <UserClass name={"Rahul class"} location={"Boradi"}/>     
      </div>
    );
  }
}


export default About;
