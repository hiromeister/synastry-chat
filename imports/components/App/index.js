import React from "react";
import { withTracker } from "meteor/react-meteor-data";

import Chat from "../Chat";

import AccountUiWrapper from "../AccountsUiWrapper";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ""
    };

    this.getUsername = this.getUsername.bind(this);
  }

  getUsername(username) {
    this.setState({
      username
    });

    console.log("App parent", this.state.username);
  }
  render() {
    console.log("curr", this.props.currentUser);
    const user = this.state.username;
    return (
      <div className="app">
        <AccountUiWrapper />
        <Chat username={user} currentUser={this.props.currentUser} />
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    currentUser: Meteor.user()
  };
})(App);
