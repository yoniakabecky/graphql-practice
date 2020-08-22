import DataLoader from "dataloader";

import db from "../data/db";
import Author from "../schema/Author";

type BatchAuthor = (ids: readonly string[]) => Promise<Author[]>;

const batchAuthors: BatchAuthor = async (ids) => {
  const authors = await db("authors").whereIn("id", ids).select();

  const authorMap: { [key: string]: Author } = {};

  authors.forEach((author) => {
    authorMap[author.id] = author;
  });

  return ids.map((id) => authorMap[id]);
};

export const authLoader = () => new DataLoader<string, Author>(batchAuthors);
