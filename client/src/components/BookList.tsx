import React from "react";

interface Props {}

export const BookList: React.FC<Props> = () => {
  return (
    <div>
      <ul id="book-list">
        <li>Book name</li>
      </ul>
    </div>
  );
};
