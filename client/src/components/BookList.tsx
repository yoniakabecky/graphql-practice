import React, { useState } from "react";
import { useBooksQuery } from "../generated/graphql";
import { BookDetails } from "./BookDetails";

interface Props {}

export const BookList: React.FC<Props> = () => {
  const { loading, data } = useBooksQuery();
  const [selected, setSelected] = useState("");

  return (
    <div className="flex-grow">
      <ul className="flex flex-wrap">
        {loading ? (
          <p className="text-gray-600 pt-4 pl-4">loading books...</p>
        ) : (
          data?.books.map((book) => (
            <li
              key={book.id}
              className="mx-4 my-2 border-solid border-2 rounded-md border-orange-200 px-3 py-2 cursor-pointer text-gray-700 hover:bg-orange-300 hover:border-orange-400 hover:text-orange-600 capitalize"
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
