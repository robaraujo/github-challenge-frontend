import React, { Component } from "react";
import { connect } from "react-redux";

import { list } from "../../store/users";
import UserList from "../../components/UserList/index.js";
import LoadingGlobal from "../../components/LoadingGlobal";

class Home extends Component {
  page = 0;

  componentDidMount() {
    this.props.onList(this.page);
  }

  prevPage = (e) => {
    e.preventDefault();
    this.page = this.page > 0 ? this.page - 1 : 0;
    this.setState({ loading: true });
    this.load(this.page);
  };

  nextPage = (e) => {
    e.preventDefault();
    this.page = this.page + 1;
    this.setState({ loading: true });
    this.load(this.page);
  };

  render() {
    const { users, lastId } = this.props;

    if (!users.length) return <LoadingGlobal />;

    return (
      <UserList
        users={users}
        onNext={() => this.props.onList(lastId)}
        onFirst={() => this.props.onList(0)}
      />
    );
  }
}

const mapStateToProps = ({ users }) => ({
  users: users.list,
  lastId: users.lastId,
});

const mapDispatchToProps = (dispatch) => ({
  onList: (since) => dispatch(list(since)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
