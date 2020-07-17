import { Resolver, Query, Arg, FieldResolver, Root } from "type-graphql";
import { books, BookType, authors } from "../data";
import Book from "../schema/Book";

@Resolver(() => Book)
export default class {
  @Query(() => [Book])
  books(): BookType[] {
    return books;
  }

  @Query(() => Book, { nullable: true })
  book(@Arg("id") id: string): BookType | undefined {
    return books.find((book) => book.id === id);
  }

  @FieldResolver()
  author(@Root() bookData: BookType) {
    return authors.find((author) => {
      return author.id === bookData.authorId;
    });
  }
}
