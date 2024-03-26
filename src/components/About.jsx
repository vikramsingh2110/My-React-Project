import React from "react";
import  ReactDOM from "react-dom/client";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
constructor(props){
    super(props);
    //console.log("Parent constructor");
}


componentDidMount(){
    //console.log("Parent did mount")
    //Component did mount is used to make api calls
}
    render(){
        //console.log("Parent render");
        return (
            <div>
            <h1>About class Component</h1>
            <div>
                Logged In User
               <UserContext.Consumer>
                {({loggedInUser}) => <h1 className="text-xl font-bpld">{loggedInUser}</h1>}
               </UserContext.Consumer>
            </div>
            <h2>This is about class component</h2>
            <UserClass name={"Vikram Rathore Class"}/>
          </div>
        )
    }
}

// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is about component</h2>
//             <User name={"Vikram Rthore"}/>
//             <UserClass name={"Vikram Rathore Class"}/>
//         </div>
//     )
// }

export default About;