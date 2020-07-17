import { Resolver, Query, Arg } from "type-graphql";
import { books, BookType } from "../data";
import Book from "../schema/Book";

@Resolver()
export default class {
  @Query(() => [Book])
  fetchBooks(): BookType[] {
    return books;
  }

  @Query(() => Book, { nullable: true })
  bookById(@Arg("id") id: string): BookType | undefined {
    return books.find((book) => book.id === id);
  }
}
