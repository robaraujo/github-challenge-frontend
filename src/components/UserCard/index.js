import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import ArrowForward from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function UserCard(props) {
  const classes = useStyles();
  const { login, id } = props;
  const loginUc = login.charAt(0).toUpperCase() + login.slice(1);

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {loginUc.charAt(0)}
          </Avatar>
        }
        action={
          <a href={"/user/" + login}>
            <IconButton aria-label="settings">
              <ArrowForward />
            </IconButton>
          </a>
        }
        title={loginUc}
        subheader={"id: " + id}
      />
      <a href={"/user/" + login}>
        <CardMedia
          className={classes.media}
          image={props.avatar_url}
          title="Paella dish"
        />
      </a>
    </Card>
  );
}
