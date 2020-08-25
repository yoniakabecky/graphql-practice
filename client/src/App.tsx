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
      <div className="main">
        <h1 className="main-title">Reading List</h1>

        <BookList />

        <div className="add-section">
          <AddBook />

          <AddAuthor />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
