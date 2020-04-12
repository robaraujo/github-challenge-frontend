import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import UserCard from "../../components/UserCard/index.js";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 24,
  },
  center: {
    textAlign: "center",
  },
}));

export default function UserList({ users, onNext, onFirst }) {
  const classes = useStyles();

  return (
    <div>
      <Grid container className={classes.root} spacing={2}>
        {users.map((user) => (
          <Grid xs={4} md={3} item>
            <UserCard {...user} />
          </Grid>
        ))}
      </Grid>
      <div class={classes.center}>
        <Button onClick={onFirst} variant="contained">
          First
        </Button>
        <Button onClick={onNext} variant="contained">
          Next
        </Button>
      </div>
    </div>
  );
}
