import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import React from "react";

import { AddBook } from "./components/AddBook";
import { BookList } from "./components/BookList";
import { AddAuthor } from "./components/AddAuthor";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="md:w-2/3 h-screen p-6 flex flex-col">
        <h1 className="mb-5 text-center text-4xl font-bold">Reading List</h1>

        <BookList />

        <div className="flex space-x-6">
          <AddBook />

          <AddAuthor />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
