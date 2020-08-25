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
    <div className="flex-1 max-w-sm bg-orange-200 shadow-lg rounded-lg overflow-hidden p-4">
      <h2 className="m-4 text-center text-xl font-bold text-gray-700">
        Add Book
      </h2>

      <form onSubmit={handleSubmit} className="w-full max-w-sm relative">
        <div className="md:flex md:items-center mb-6">
          <label className="inline-block text-gray-600 font-bold md:text-right mb-1 md:mb-0 pr-4 md:w-1/4">
            Name:
          </label>
          <input
            type="text"
            value={name}
            placeholder="Book Name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setName(e.currentTarget.value)
            }
          />
        </div>

        <div className="md:flex md:items-center mb-6">
          <label className="inline-block text-gray-600 font-bold md:text-right mb-1 md:mb-0 pr-4 md:w-1/4">
            Genre:
          </label>
          <input
            type="text"
            value={genre}
            placeholder="Genre"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setGenre(e.currentTarget.value)
            }
          />
        </div>

        <div className="md:flex md:items-center mb-6 inline-block relative">
          <label className="inline-block text-gray-600 font-bold md:text-right mb-1 md:mb-0 pr-4 md:w-1/4">
            Author:
          </label>
          <select
            value={authorId}
            className="block appearance-none bg-white border border-gray-400 hover:border-gray-500 text-gray-600 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline md:w-3/4 capitalize"
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

          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>

        <button className="float-right bg-orange-500 hover:bg-orange-700 py-2 px-4 text-white font-bold rounded">
          +
        </button>
      </form>
    </div>
  );
};
