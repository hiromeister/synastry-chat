import React from "react";

export default class SignInform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: "",
      username: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  renderSign(){
    const user1 = this.state.temp;

    if(user1 > 0){
      return <p> Welcome <span> {user1} </span> </p>
    } else {
      
      return(
        <div className="SignInForm">
        <form />
        <label> Enter a nickname</label>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.temp}
        />
        <button onClick={() => this.props.getUsername(user1)}> Entrer </button>
      </div>
      )
    }
  }

  handleChange(evt) {
    this.setState({ temp: evt.target.value });
  }

  render() {
    return (
      <div>
        {this.renderSign()}
      </div>
    )
   
    // const user1 = this.state.temp;
    // return (
    //   <div className="SignInForm">
    //     <form />
    //     <label> Enter a nickname</label>
    //     <input
    //       type="text"
    //       onChange={this.handleChange}
    //       value={this.state.temp}
    //     />
    //     <button onClick={() => this.props.getUsername(user1)}> Entrer </button>
    //   </div>
    // );

  }
}
