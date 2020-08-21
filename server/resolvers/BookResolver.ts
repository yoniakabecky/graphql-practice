import {
  Resolver,
  Query,
  Arg,
  FieldResolver,
  Root,
  Mutation,
} from "type-graphql";

import db from "../data/db";
import Book from "../schema/Book";
import BookInput from "../schema/BookInput";
// import { BookType } from "../interfaces/book";
// import Author from "../schema/Author";

@Resolver(() => Book)
export default class BookResolver {
  @Query(() => [Book])
  async books() {
    return await db.from("books");
  }

  @Query(() => Book, { nullable: true })
  async book(@Arg("id") id: string) {
    const book = await db("books").where({ id }).first();

    if (!book) return null;

    return book;
  }

  // @FieldResolver(() => Author, { complexity: 2 })
  // async author(@Root() book: BookType) {
  //   const [author] = await db("authors").where({ id: book.authorId });

  //   if (!author) return null;

  //   return author;
  // }

  @Mutation(() => Boolean)
  async addBook(@Arg("data") { name, genre, authorId }: BookInput) {
    try {
      await db("books").insert({ name, genre, authorId });
    } catch (err) {
      console.log(err);
      return false;
    }

    return true;
  }
}
