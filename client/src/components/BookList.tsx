import React from "react";
import { useBooksQuery } from "../generated/graphql";

interface Props {}

export const BookList: React.FC<Props> = () => {
  const { loading, data } = useBooksQuery();

  return (
    <div>
      <ul id="book-list">
        {loading ? (
          <div>Loading books...</div>
        ) : (
          data?.books.map((book) => <li key={book.id}>{book.name}</li>)
        )}
      </ul>
    </div>
  );
};
