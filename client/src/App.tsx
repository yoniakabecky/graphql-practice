import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import React from "react";

import { BookList } from "./components/BookList";

const client = new ApolloClient({
  uri: "https://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Reading List</h1>

        <BookList />
      </div>
    </ApolloProvider>
  );
}

export default App;