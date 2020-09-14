import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    user(id: String): User
    users: [User]
  }
  type User {
    id: String
    name: String
    address: String
    birthday: String
    posts: [Post]
  }
  type Post {
    id: String
    title: String
    content: String
    comments: [String]
  }
  input InputPost {
    id: String
    title: String
    content: String
    comments: [String]
  }
  type Mutation {
    addUser(
      name: String!
      address: String!
      birthday: String!
      posts: [InputPost]
    ): User
    deleteUser(
      id: String!
    ): String
    addPost(
      userId: String!
      title: String!
      content: String!
      comments: [String]
    ): Post
  }
`;

export default typeDefs;
