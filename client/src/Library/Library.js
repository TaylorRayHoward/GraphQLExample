import React from 'react';
import { Query } from 'react-apollo';
import { libraryByIdWithAuthors } from './queries';
import { Grid, Typography, withStyles } from '@material-ui/core';
import { AuthorList } from '../Author';

const styles = theme => ({
  container: {
    paddingBottom: '1rem'
  }
});

const Library = ({ match: { params: { id } }, classes }) => {
  return (
    <Query query={libraryByIdWithAuthors} variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) {
          return (
            <h1>Loading...</h1>
          );
        }
        return (
          <Grid container
                justify="center"
                alignItems="center"
          >
            <Typography variant="h3" className={classes.container}>
              {data.library.name}
            </Typography>
            <AuthorList authors={data.library.authors} />
          </Grid>
        );
      }}
    </Query>
  );
};

export default withStyles(styles)(Library);