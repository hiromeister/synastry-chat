import React from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Messages } from "../../api/messages.js";
import { Meteor } from "meteor/meteor";

import Message from "../Message";

class MessagesList extends React.Component {
  renderMessages() {
    return this.props.messages.map(message => (
      <Message key={message._id} message={message} currentUser={this.props.currentUser} />
    ));
  }

  render() {
    return (
      <div>
        {this.renderMessages()}
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe("listMessages");
  return {
    messages: Messages.find({}).fetch()
  };
})(MessagesList);
