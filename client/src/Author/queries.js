import gql from 'graphql-tag';

export const booksForAuthor = gql`
query($id: String!) {
  author(id:$id){
    books{
      id
      title
      isbn
      publishedAt
    }
  }
}
`;