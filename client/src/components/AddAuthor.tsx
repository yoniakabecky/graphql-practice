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
    <div className="add-section-wrapper">
      <h2 className="add-section-title">Add Author</h2>

      <form onSubmit={handleSubmit} className="add-section-form">
        <div className="form-content-wrapper">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            placeholder="Author Namge"
            className="form-content-input"
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setName(e.currentTarget.value)
            }
          />
        </div>

        <div className="form-content-wrapper">
          <label>Age:</label>
          <input
            type="number"
            value={age}
            placeholder="Age"
            className="form-content-input"
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setAge(e.currentTarget.value)
            }
          />
        </div>

        <button className="form-submit-btn">+</button>
      </form>
    </div>
  );
};
