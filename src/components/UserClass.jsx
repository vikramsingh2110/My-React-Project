import React from 'react'

class UserClass extends React.Component {

    constructor(props){
        super(props);
       // console.log(this.props.name + "Child Constructor");

        this.state ={
            //count: 0,
            userInfo: {
                name: "Dummy",
                location: "Default",
                avatar_url: "Fake URL"
            }
        };
    }

   async componentDidMount(){
       // console.log(this.props.name +"Child did mount")
       const data = await fetch("https://api.github.com/users/vikramsingh2110")
       const json = await data.json();
       //console.log(json)

       this.setState({
        userInfo: json,
       })
    }


    componentDidUpdate(){
        console.log("Component did update"); 
    }

    componentWillUnmount(){
        console.log("Component unmounted");
    }
    
    render(){
      //  console.log(this.props.name + "Child Render")
        return (
            <div className='user-card'>
                {/* <h1>Count = {this.state.count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count : this.state.count + 1
                    })
                }}>Counter</button> */}
                <h2>Name: {this.state.userInfo.id}</h2>
                <img src={this.state.userInfo.avatar_url}></img>
                <h3>Location: Gurugram</h3>
                <h4>Contact: vikramisme1221@gmail.com</h4>
            </div>
        )
    }
}

export default UserClass;