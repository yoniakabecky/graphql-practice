import { Resolver, Query, Arg, FieldResolver, Root } from "type-graphql";

import db from "../data/db";
import Book from "../schema/Book";
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
    const book = await db("books")
      .where({ id: parseInt(id) })
      .first();

    if (!book) return null;

    return book;
  }

  // @FieldResolver(() => Author, { complexity: 2 })
  // async author(@Root() book: BookType) {
  //   const [author] = await db("authors").where({ id: book.authorId });

  //   if (!author) return null;

  //   return author;
  // }
}
