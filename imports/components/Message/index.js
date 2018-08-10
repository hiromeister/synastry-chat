import React from "react";
export default class Message extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showEditInput: false,
      text: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      text: this.props.message.text
    });
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      text: e.target.value
    });
  }

  handleSubmit(e) {
    console.log(this.props.message._id);
    e.preventDefault();
    Meteor.call("messages.update", this.props.message._id, this.state.text);
    this.setState({
      showEditInput: false
    });
  }

  editMessage() {
    this.setState({
      showEditInput: true
    });
  }

  displayEdit() {
    if (this.props.currentUser) {
      if (this.props.message.owner === this.props.currentUser._id) {
        return <p onClick={() => this.editMessage()}> ... </p>;
      }
    }
  }

  renderMessage() {
    if (this.state.showEditInput === false) {
      return (
        <div className="Message">
          <p className="meta">
            <span className="user">&lt;{this.props.message.username}&gt;</span>
            <span className="time">{this.props.message.time}</span>
          </p>
          <p>{this.props.message.text}</p>
          {this.displayEdit()}
        </div>
      );
    } else {
      return (
        <div className="Message">
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleChange}
              type="text"
              value={this.state.text}
            />
            <button>Valider</button>
          </form>
        </div>
      );
    }
  }

  render() {
    return <div>{this.renderMessage()}</div>;
  }
}
