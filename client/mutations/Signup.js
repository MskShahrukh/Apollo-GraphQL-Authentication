import gql from 'graphql-tag';

export default gql`
  mutation Signup(
    $email: String
    $password: String
    $name: String
    $displayPicture: String
    $bio: String
  ) {
    signup(
      email: $email
      password: $password
      name: $name
      displayPicture: $displayPicture
      bio: $bio
    ) {
      id
      email
      name
      displayPicture
      bio
    }
  }
`;
