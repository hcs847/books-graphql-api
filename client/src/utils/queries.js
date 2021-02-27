import gql from 'graphql-tag';

export const QUERY_GET_ME = gql`
    query me {
        _id: ID
    username: String
    email: String
    savedBooks: [Book]
    
    }
`;

