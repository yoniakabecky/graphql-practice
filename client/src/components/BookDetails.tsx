import React from "react";
import { useBookQuery } from "../generated/graphql";

interface Props {
  bookId: string;
}

export const BookDetails: React.FC<Props> = ({ bookId }) => {
  const { loading, data } = useBookQuery({
    variables: {
      id: bookId,
    },
  });

  if (loading)
    return <p className="text-gray-600 pt-4 pl-4">loading book data...</p>;

  if (!data) return <p className="text-gray-600 pt-4 pl-4">no data to show</p>;
  const { name, genre, author } = data.book!;

  return (
    <div className="absolute top-0 right-0 bottom-0 md:w-1/3 p-4 bg-red-400 text-red-100">
      <h2 className="my-3 text-4xl font-bold capitalize">{name}</h2>

      <p>
        by <span className="mb-2 text-xl capitalize">{author.name}</span>
      </p>
      <p className="mb-2 text-xl capitalize">Genre - {genre}</p>

      <p className="mt-4 text-xl">Other books by this author</p>
      <ul className="other-books">
        {author.books?.map((book) => (
          <li key={book.id} className="pl-4 list-disc list-inside">
            {book.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
