import { Component } from "react";

class Home extends Component {
  state = {
    userName: "",
  };

  sayHi=()=> {
    const newUserName = "John";
    this.setState({ userName: newUserName });
    console.log("Hello", newUserName);
  }

  render() {
    return (
      <>
        <h1 className="bg-success">
          Hi from home Component, {this.state.userName}
        </h1>
        <button onClick={this.sayHi}>Click me</button>
      </>
    );
  }
}

export default Home;
