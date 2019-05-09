import React from 'react';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Query from 'react-apollo/Query';
import { booksForAuthor } from './queries';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';

const AuthorCard = ({ author, classes }) => {
  return (
    <ExpansionPanel className={classes.expando}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>{author.fullName}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Query query={booksForAuthor} variables={{ id: author.id }}>
          {({ loading, error, data }) => {
            if (loading) {
              return (
                <h1>Loading...</h1>
              );
            }
            return (
              <List>
                {data.author.books.map(b =>
                  <ListItem key={b.id}>
                    <ListItemText
                      primary={b.title}
                      secondary={`Published: ${b.publishedAt}`}
                    />
                  </ListItem>,
                )}
              </List>
            );
          }}
        </Query>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default AuthorCard;
