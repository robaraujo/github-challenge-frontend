import React, { Component } from "react";

export default class App extends Component {
  state = {
    users: [],
    loading: true,
  };

  page = 0;

  componentDidMount() {}

  render() {
    return <div>User</div>;
  }
}
