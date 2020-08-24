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

  if (loading) return <p>loading book data...</p>;
  if (!data) return <p>no data to show</p>;

  const { name, genre, author } = data.book!;

  return (
    <div id="book-details">
      <h2>{name}</h2>

      <p>{author.name}</p>
      <p>{genre}</p>

      <p>All books by this author:</p>
      <ul className="other-books">
        {author.books?.map((book) => (
          <li key={book.id}>{book.name}</li>
        ))}
      </ul>
    </div>
  );
};
