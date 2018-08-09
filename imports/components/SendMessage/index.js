import React from "react";

import { Messages } from "../../api/messages";
var moment = require("moment");


export default class SendMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      text: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let text = this.state.text;
    let user = this.props.username;
    const time = moment()
    .startOf("hour")
    .fromNow();

    Meteor.call("tasks.insert", text, user, time);
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>

        <form className="SendMessage" onSubmit={this.handleSubmit}>
          <input
            type="text"
            ref="textInput"
            value={this.state.text}
            placeholder="Message"
            onChange={this.handleChange}
            
          />
        </form>
      </div>
    );
  }
}
