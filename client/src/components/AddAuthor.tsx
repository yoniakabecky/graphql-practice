import React, { useState } from "react";
import { useAddAuthorMutation, useAuthorsQuery } from "../generated/graphql";

interface Props {}

export const AddAuthor: React.FC<Props> = () => {
  const [addAuthor] = useAddAuthorMutation();
  const { refetch: refetchAuthor } = useAuthorsQuery();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await addAuthor({
      variables: {
        data: {
          name,
          age: parseInt(age),
        },
      },
    });

    if (result) {
      refetchAuthor();
      setName("");
      setAge("");
    }
  };

  return (
    <div className="flex-1 max-w-sm bg-orange-200 shadow-lg rounded-lg overflow-hidden p-4">
      <h2 className="m-4 text-center text-xl font-bold text-gray-700">
        Add Author
      </h2>

      <form onSubmit={handleSubmit} className="w-full max-w-sm relative">
        <div className="md:flex md:items-center mb-6">
          <label className="inline-block text-gray-600 font-bold md:text-right mb-1 md:mb-0 pr-4 md:w-1/4">
            Name:
          </label>
          <input
            type="text"
            value={name}
            placeholder="Author Namge"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setName(e.currentTarget.value)
            }
          />
        </div>

        <div className="md:flex md:items-center mb-6">
          <label className="inline-block text-gray-600 font-bold md:text-right mb-1 md:mb-0 pr-4 md:w-1/4">
            Age:
          </label>
          <input
            type="number"
            value={age}
            placeholder="Age"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setAge(e.currentTarget.value)
            }
          />
        </div>

        <button className="float-right bg-orange-500 hover:bg-orange-700 py-2 px-4 text-white font-bold rounded">
          +
        </button>
      </form>
    </div>
  );
};
