const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID 
        username: String
        email: String
        password: String
        savedBooks: [Book]
    }

    type Book {
        _id: ID 
        author: [String]
        description: String
        bookId: String
        image: String
        link: String
        title: String
    }

    type Query {
        getSingleUser(id: ID, username: String): User
    }


`

module.exports = typeDefs;