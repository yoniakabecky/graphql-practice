import { Resolver, Query, Arg, FieldResolver, Root } from "type-graphql";
import { authors, AuthorType, books } from "../data";
import Author from "../schema/Author";

@Resolver(() => Author)
export default class {
  @Query(() => [Author])
  authors(): AuthorType[] {
    return authors;
  }

  @Query(() => Author, { nullable: true })
  author(@Arg("id") id: string): AuthorType | undefined {
    return authors.find((author) => author.id === id);
  }

  @FieldResolver()
  books(@Root() authorData: AuthorType) {
    return books.filter((book) => {
      return book.authorId === authorData.id;
    });
  }
}
