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