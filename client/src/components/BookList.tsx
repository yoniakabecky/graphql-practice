import React, { useState } from "react";
import { useBooksQuery } from "../generated/graphql";
import { BookDetails } from "./BookDetails";

interface Props {}

export const BookList: React.FC<Props> = () => {
  const { loading, data } = useBooksQuery();
  const [selected, setSelected] = useState("");

  return (
    <div>
      <ul id="book-list">
        {loading ? (
          <div>Loading books...</div>
        ) : (
          data?.books.map((book) => (
            <li
              key={book.id}
              onClick={() => {
                setSelected(book.id);
              }}
            >
              {book.name}
            </li>
          ))
        )}
      </ul>

      {selected ? (
        <BookDetails bookId={selected} />
      ) : (
        <p>click book name to see the detalis</p>
      )}
    </div>
  );
};
