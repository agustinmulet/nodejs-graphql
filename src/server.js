import express from "express";
import { ApolloServer } from "apollo-server-express";
import schema from "./schema.js";
import mongoose from "mongoose";
require('dotenv').config()

const startServer = async () => {
  const app = express();
  const port = 4000;

  const server = new ApolloServer({ schema });
  server.applyMiddleware({ app });

  await mongoose.connect(
    process.env.NODE_MONGO_CONNECT,
    {
    useNewUrlParser: true,
    }
  );

  app.listen(port, () => {
    console.log("listening port: %s", port);
  });
};

startServer();
