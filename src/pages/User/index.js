import React, { Component } from "react";
import { connect } from "react-redux";

import { get } from "../../store/user";
import { get as getRepos } from "../../store/repos";
import UserDetail from "../../components/UserDetail/index.js";
import LoadingGlobal from "../../components/LoadingGlobal/index.js";

class UserPage extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.onGet(id);
    this.props.onGetRepos(id);
  }

  render() {
    let { user, repos } = this.props;

    if (!user) return <LoadingGlobal />;

    return <UserDetail {...this.props.user} repos={repos} />;
  }
}

const mapStateToProps = ({ user, repos }) => ({
  user: user.user,
  repos: repos.list,
});

const mapDispatchToProps = (dispatch) => ({
  onGet: (id) => dispatch(get(id)),
  onGetRepos: (id) => dispatch(getRepos(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
