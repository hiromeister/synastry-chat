import React from "react";

import SignIn from "../SignIn";
import Chat from "../Chat";

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      username : ''
    }

    this.getUsername = this.getUsername.bind(this);
  }

  getUsername(username){
    this.setState({
      username
    });

    console.log("App parent", this.state.username);
  }
  render() {
    const user = this.state.username;
    return (
      <div className="app">
        <SignIn getUsername={this.getUsername}/>
        <Chat username={user}/>
      </div>
    );
  }
}
