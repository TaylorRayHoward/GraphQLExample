import React from 'react';
import { withRouter } from 'react-router-dom';
import AuthorCard from './AuthorCard';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/es/styles/withStyles';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  authorCard: {
    height: '300px',
    minWidth: '200px'
  },
  expando: {
    width: '50%'
  }
});

const AuthorList = ({ classes, authors }) => {
  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
      direction="column"
      spacing={16}
    >
      {authors.map(a => (
        <Grid key={a.id} item className={classes.expando}>
          <AuthorCard author={a} key={a.id} />
        </Grid>
      ))
      }
    </Grid>
  );
};

export default withStyles(styles)(withRouter(AuthorList));
