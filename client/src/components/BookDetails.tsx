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

  if (loading) return <p className="loading">loading book data...</p>;

  if (!data) return <p className="loading">no data to show</p>;
  const { name, genre, author } = data.book!;

  return (
    <div className="book-details">
      <h2 className="book-name capitalize">{name}</h2>

      <p>
        by <span className="book-other-info capitalize">{author.name}</span>
      </p>
      <p className="book-other-info capitalize">Genre - {genre}</p>

      <div className="spacer" />

      <p>Other books by this author</p>
      <ul className="other-books">
        {author.books?.map((book) => (
          <li key={book.id}>{book.name}</li>
        ))}
      </ul>
    </div>
  );
};
