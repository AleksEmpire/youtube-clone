import React, { Component } from "react";
import { Paper, TextField } from "@material-ui/core";
export default class SearchBar extends Component {
  state = {
    userInput: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmitForm = (e) => {
    e.preventDefault();
    const { userInput } = this.state;
    const { onFormSubmit } = this.props;
    onFormSubmit(userInput);
  };
  render() {
    const { userInput } = this.state;
    return (
      <Paper elevation={6} style={{ padding: "25px" }}>
        <form onSubmit={this.handleSubmitForm}>
          <TextField
            name="userInput"
            value={userInput}
            fullWidth
            label="Search..."
            onChange={this.handleChange}
          />
        </form>
      </Paper>
    );
  }
}
