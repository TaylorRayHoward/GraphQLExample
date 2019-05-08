import React from 'react';
import LibraryCard from './LibraryCard';
import { Grid, withStyles } from '@material-ui/core';
import { Query } from 'react-apollo';
import { getLibraries } from './queries';

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

const LibraryList = ({ classes }) => {

  return (
    <>
      <Query query={getLibraries}>
        {({ loading, error, data }) => {
          if (loading) {
            return (
              <h1>Loading...</h1>
            );
          }
          return (
            <Grid
              container
              className={classes.root}
              justify="center"
              alignItems="center"
              direction="column"
              spacing={16}
            >
              {data.libraries.map(value => (
                <Grid key={value.id} item>
                  <LibraryCard library={value} />
                </Grid>
              ))}
            </Grid>
          );
        }}
      </Query>
    </>
  );
};

export default withStyles(styles)(LibraryList);