import { Resolver, Query, Arg } from "type-graphql";
import { authors, AuthorType } from "../data";
import Author from "../schema/Author";

@Resolver()
export default class {
  @Query(() => [Author])
  authors(): AuthorType[] {
    return authors;
  }

  @Query(() => Author, { nullable: true })
  author(@Arg("id") id: string): AuthorType | undefined {
    return authors.find((author) => author.id === id);
  }
}
