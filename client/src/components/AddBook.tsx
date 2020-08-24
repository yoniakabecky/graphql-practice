import React, { useState } from "react";
import {
  useAuthorsQuery,
  useAddBookMutation,
  useBooksQuery,
} from "../generated/graphql";

interface Props {}

export const AddBook: React.FC<Props> = () => {
  const { loading, data } = useAuthorsQuery();
  const [addBook] = useAddBookMutation();
  const { refetch: refetchBooks } = useBooksQuery();

  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorId, setAuthorId] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await addBook({
      variables: {
        data: {
          name,
          genre,
          authorId: parseInt(authorId),
        },
      },
    });

    if (result) refetchBooks();
  };

  return (
    <form id="add-book" onSubmit={handleSubmit}>
      <div className="field">
        <label>Book name:</label>
        <input
          type="text"
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setName(e.currentTarget.value)
          }
        />
      </div>

      <div className="field">
        <label>Genre:</label>
        <input
          type="text"
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setGenre(e.currentTarget.value)
          }
        />
      </div>

      <div className="field">
        <label>Author:</label>
        <select
          onChange={(e: React.FormEvent<HTMLSelectElement>) =>
            setAuthorId(e.currentTarget.value)
          }
        >
          {loading ? (
            <option disabled>loading authors...</option>
          ) : (
            <>
              <option>Select author</option>

              {data?.authors.map(({ name, id }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </>
          )}
        </select>
      </div>

      <button>+</button>
    </form>
  );
};
