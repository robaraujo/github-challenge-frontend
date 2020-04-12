import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ArrowBack from "@material-ui/icons/ArrowBackIos";
import moment from "moment";

import ReposTable from "../../components/ReposTable/index.js";
import { LinearProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function UserDetail(props) {
  const classes = useStyles();
  let { login, id, html_url, created_at, repos } = props;
  login = login.charAt(0).toUpperCase() + login.slice(1);
  const formatedDate = moment(created_at).format("YYYY-MM-DD HH:mm");

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {login.charAt(0)}
          </Avatar>
        }
        action={
          <a href={"/"}>
            <IconButton aria-label="settings">
              <ArrowBack />
            </IconButton>
          </a>
        }
        title={login}
        subheader={"id: " + id}
      />
      <CardMedia
        className={classes.media}
        image={props.avatar_url}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <p>
            <b>Profile</b>: <a href={html_url}>{html_url}</a>
          </p>
          <p>
            <b>Created at</b>: {formatedDate}
          </p>
        </Typography>
        {repos ? <ReposTable repos={repos} /> : <LinearProgress />}
      </CardContent>
    </Card>
  );
}
