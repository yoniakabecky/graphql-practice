import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  buildSchema,
} from "graphql";
import _ from "lodash";
import * as typeDefs from "./schema.graphql";

// temp data
const books = [
  { name: "Book 1", genre: "Fantasy", id: "1" },
  { name: "Book 2", genre: "Fantasy", id: "2" },
  { name: "Book 3", genre: "SF", id: "3" },
];

export const schema: GraphQLSchema = buildSchema(`
  type Book {
    id: String
    name: String
    genre: String
  }

  type Query {
    book(id: String): Book
  }
`);

export const root = {
  book: ({ id }: any) => {
    return books[id];
  },
};
// const BookType = new GraphQLObjectType({
//   name: "Book",
//   fields: () => ({
//     id: { type: GraphQLString },
//     name: { type: GraphQLString },
//     genre: { type: GraphQLString },
//   }),
// });

// const RootQuery = new GraphQLObjectType({
//   name: "RootQueryType",
//   fields: {
//     book: {
//       type: BookType,
//       args: { id: { type: GraphQLString } },
//       resolve(parent, args) {
//         // code to get data from db / other source
//         _.find(books, { id: args.id });
//       },
//     },
//   },
// });

// export default new GraphQLSchema({
//   query: RootQuery,
// });
