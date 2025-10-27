import React from "react";
import UserCard from "./UserCard";
class AboutClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, users: null };
  }
  async componentDidMount() {
    // this.intervalId=setInterval(()=>{
    //   console.log('React, Interval');
    // }, 1000);
    try {
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      // console.log(data);
      this.setState({ users: data?.users });
      // console.log(this.state.users);
    } catch (err) {
      console.log(err.message);
    }
  }
  componentDidUpdate(){
    // console.log("Component Updated");
  }
  componentWillUnmount(){
    // clearInterval(this.intervalId);
    // console.log("Component Unmounted")
  }
  render() {
    // console.log(this.state.users);
    if (this.state.users === null) {
      return (
        <>
          <h4>{"Vijaya Kumar" + " " + "Gavara"} - SDE</h4>
        </>
      );
    }
    return (
      <>
        {/* <h2>I am {this.props.name} working for this project as a {this.props.role}</h2> */}

        {/* <h3>Count: {this.state.count}</h3>
                <button onClick={()=>{
                  this.setState({count:this.state.count+1});
                }}>Increase</button> */}
        {this.state.users.map((user) => {
          return <UserCard key={user.id} details={user} />;
        })}
        
      </>
    );
  }
}
export default AboutClass;
