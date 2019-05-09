import React from 'react';
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import Query from 'react-apollo/Query';
import { booksForAuthor } from './queries';

const AuthorCard = ({ author }) => {
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMore />}>
        <Typography>{author.fullName}</Typography>
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
