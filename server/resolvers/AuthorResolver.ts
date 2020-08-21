import { Resolver, Query, Arg, FieldResolver, Root } from "type-graphql";

import db from "../data/db";
import { AuthorType } from "../interfaces/author";
import Author from "../schema/Author";

@Resolver(() => Author)
export default class AuthorResolver {
  @Query(() => [Author])
  async authors() {
    return await db.from("authors");
  }

  @Query(() => Author, { nullable: true })
  async author(@Arg("id") id: string) {
    const author = await db("authors")
      .where({ id: parseInt(id) })
      .first();

    if (!author) return null;

    return author;
  }

  @FieldResolver()
  async books(@Root() author: AuthorType) {
    const books = await db("books").where({ authorId: author.id });

    if (!books) return null;

    return books;
  }
}
