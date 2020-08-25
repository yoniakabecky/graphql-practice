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

    if (result) {
      refetchBooks();
      setName("");
      setGenre("");
    }
  };

  return (
    <div className="add-section-wrapper">
      <h2 className="add-section-title">Add Book</h2>

      <form onSubmit={handleSubmit} className="add-section-form">
        <div className="form-content-wrapper">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            placeholder="Book Name"
            className="form-content-input"
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setName(e.currentTarget.value)
            }
          />
        </div>

        <div className="form-content-wrapper">
          <label>Genre:</label>
          <input
            type="text"
            value={genre}
            placeholder="Genre"
            className="form-content-input"
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setGenre(e.currentTarget.value)
            }
          />
        </div>

        <div className="form-content-wrapper">
          <label>Author:</label>
          <select
            value={authorId}
            className="form-content-input form-content-select capitalize"
            onChange={(e: React.FormEvent<HTMLSelectElement>) =>
              setAuthorId(e.currentTarget.value)
            }
          >
            {loading ? (
              <option disabled>loading authors...</option>
            ) : (
              <>
                <option>select author</option>

                <option disabled>-----------</option>

                {data?.authors.map(({ name, id }) => (
                  <option key={id} value={id}>
                    {name}
                  </option>
                ))}
              </>
            )}
          </select>
        </div>

        <button className="form-submit-btn">+</button>
      </form>
    </div>
  );
};
