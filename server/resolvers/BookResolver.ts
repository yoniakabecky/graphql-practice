import { Resolver, Query, Arg } from "type-graphql";
import { books, BookData } from "../data";
import Book from "../schema/Book";

@Resolver()
export default class {
  @Query(() => Book, { nullable: true })
  bookById(@Arg("id") id: string): BookData | undefined {
    return books.find((book) => book.id === id);
  }

  @Query(() => [Book])
  fetchBooks(): BookData[] {
    return books;
  }
}
