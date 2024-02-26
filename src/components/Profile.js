import React from "react";


class Profile extends React.Component{
    constructor(props){
        super(props)

        this.state={
        //    count:0,
        //    count2:0,
           userInfo:{
            name:"dummy",
            id:"id"
           }
        }

        console.log("child-constructor "+ this.props.name)
    }

   async componentDidMount(){
       console.log("child compoenentDidMount"+ this.props.name)
       const data = await fetch("https://api.github.com/users/kaushalpapnai")
       const json = await data.json()
       this.setState(
        {
           userInfo:json,
        }
       )
    }


    render(){
        let {count} = this.state
        console.log("child - render "+ this.props.name)
        return(
            <>
            <div >
                <img   src={this.state.userInfo.avatar_url} alt="image">
                </img>
                <h1>
                    name: {this.state.userInfo.name}
                </h1>
                <h1>
                    id : {this.state.userInfo.id}
                </h1>
                {/* <h1>count:{count}</h1>
                <button onClick={()=>{
                    this.setState({count:1})
                }}>click</button> */}                  
            </div>
            </>
        )
    }
}

export default Profile