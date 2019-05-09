import gql from 'graphql-tag';

export const getLibraries = gql`
query {
  libraries {
    id
    name
    state
    street
    city
    zip
  }
}
`;

export const libraryByIdWithAuthors = gql`
query($id: String!) {
  library(id: $id) {
    name
    authors {
      id
      fullName
    }
  }
}
`;