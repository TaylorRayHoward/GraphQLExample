import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Home } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import { withRouter } from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1,
    marginBottom: '2rem'
  },
  button: {
    color: 'white'
  }
};

function SimpleAppBar(props) {
  const { classes, history } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton onClick={() => history.push('/')}>
            <Home className={classes.button} />
          </IconButton>
          <Typography variant="h6" color="inherit">
            GraphQL Example
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(withRouter(SimpleAppBar));