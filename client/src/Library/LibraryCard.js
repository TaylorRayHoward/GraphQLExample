import React from 'react';
import { Card, withStyles, CardHeader, CardContent, Typography, CardActionArea } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

const styles = ({
  card: {
    height: '200px',
    width: '400px',
  }
});

const LibraryCard = ({ classes, library, history }) => {
  return (
    <CardActionArea onClick={() => history.push(`/library/${library.id}`)}>
      <Card className={classes.card}>
        <CardHeader title={library.name} />
        <CardContent>
          <Typography paragraph>
            {library.street}
          </Typography>
          <Typography paragraph>
            {library.city}, {library.state} {library.zip}
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

export default withRouter(withStyles(styles)(LibraryCard));