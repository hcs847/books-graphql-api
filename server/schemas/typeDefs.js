// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create typeDefs
const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    savedBooks: [Book]
    booksCount: Int
}

type Book {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}

input SaveBookInput {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
}

type Query {
    me: User
    users: [User]
    user(username: String!): User
    books(username: String): [Book]
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth # return Auth object
    saveBook(input: SaveBookInput!): User
}

type Auth {
    token: ID!
    user: User
}

`;

module.exports = typeDefs;
