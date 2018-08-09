import React from "react";
import Moment from "moment";

export default class Message extends React.Component {
  render() {
    console.log(this.props.message);
    return (
      <div className="Message">
        <p className="meta"><span className="user">&lt;{this.props.message.user}&gt;</span> <span className="time">{this.props.message.time}</span> </p>
        <p>{this.props.message.text}</p>
        <p></p>
      </div>
    );
  }
}
