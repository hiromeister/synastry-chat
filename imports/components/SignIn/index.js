import React from "react";

import SignInForm from "../SignInForm";

export default class SignIn extends React.Component {
  render() {
    return (
      <div>
        <SignInForm getUsername={this.props.getUsername} />
      </div>
    );
  }
}
