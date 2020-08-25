import React, { useState } from "react";
import { useBooksQuery } from "../generated/graphql";
import { BookDetails } from "./BookDetails";

interface Props {}

export const BookList: React.FC<Props> = () => {
  const { loading, data } = useBooksQuery();
  const [selected, setSelected] = useState("");

  return (
    <div className="flex-grow">
      <ul className="book-list">
        {loading ? (
          <p className="loading">loading books...</p>
        ) : (
          data?.books.map((book) => (
            <li
              key={book.id}
              className="book capitalize"
              onClick={() => {
                setSelected(book.id);
              }}
            >
              {book.name}
            </li>
          ))
        )}
      </ul>

      {selected && <BookDetails bookId={selected} />}
    </div>
  );
};
