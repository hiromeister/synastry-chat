import React from "react";
import SendMessage from "../SendMessage";
import MessagesList from "../MessagesList";

export default class Chat extends React.Component {
  render() {
    const username = this.props.username;
    return (
      <div>
        <div className="Chat">
          <MessagesList currentUser={this.props.currentUser} />
        </div>
        <div>
          <SendMessage username={username}  />
        </div>
      </div>
    );
  }
}
