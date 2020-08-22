import {
  Resolver,
  Query,
  Arg,
  FieldResolver,
  Root,
  Mutation,
  Ctx,
} from "type-graphql";

import db from "../data/db";
import { BookType } from "../interfaces/book";
import Author from "../schema/Author";
import Book from "../schema/Book";
import BookInput from "../schema/BookInput";
import { MyContext } from "../interfaces/MyContext";

@Resolver(() => Book)
export default class BookResolver {
  @Query(() => [Book])
  async books() {
    return await db.from("books").select().limit(10);
  }

  @Query(() => Book, { nullable: true })
  async book(@Arg("id") id: string) {
    const book = await db("books").where({ id }).first();

    if (!book) return null;

    return book;
  }

  @FieldResolver(() => Author, { complexity: 2 })
  async author(@Root() book: BookType, @Ctx() ctx: MyContext) {
    return ctx.authLoader.load(book.authorId);
  }

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
