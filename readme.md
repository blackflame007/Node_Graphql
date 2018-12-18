# Graphql Node.js Server

This repo is a demo of setting up graphql with a node environment. This repo requires Docker as to be installed on your machine as it uses docker for the prisma orm.

## Installation

To get started type to run prismas orm in the background

```bash
docker-compose up -d
```

Then start your Graphql-yoga server which is a wrapper on top of apollo server.

```bash
npm start
```

index.js is our entry point into our application, Here we are creating a new variable called server which is taking in typeDefs, resolvers and context these arguments are coming from the graphql-yoga library which wraps express/apollo-server nicely. localhost:8000/playground is an ide built into the dev serer that servers as a place to test your queries and mutations directly in your browser. Our Typedefs define the data structure for our application and the resolver takes the types that we have created and executes them.

### Data

Our database is being defined with 2 schemas our schema.graphql and our datamodel.graphql
Schema.graphql is the main schema for our applicaton as our index.js defines it as our typeDefs

#### Prisma Data Flow

In the database folder we see a datamodel.graphql file that we can define a data models structure in and have it automatically generate queries, mutations and subscriptions for this data table. Let me express how useful this is, it creates an entire CRUD api like the rails generate command with stronger featuers.

```bash
cd database
prisma deploy
```

To migrate the chages in your datamodel.graphql to your database. A hook in prisma.yml gets triggered which generates your better then crud methods which will be placed in src/generated. To learn more about prismas orm crud like methods you can check them out here: https://www.prisma.io/docs/prisma-client/basic-data-access/writing-data-JAVASCRIPT-rsc6/

To test user related forigen key with the post example goto: http://127.0.0.1:8000/playground

Make sure you paste your token into the HTTP headers at the bottom after using the Signup or Signin Mutation.

```javascript
{
  "Authorization": "Bearer __TOKEN__"
}
```
