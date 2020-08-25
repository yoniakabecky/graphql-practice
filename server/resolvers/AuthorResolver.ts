import {
  Resolver,
  Query,
  Arg,
  FieldResolver,
  Root,
  Mutation,
} from "type-graphql";

import db from "../data/db";
import { AuthorType } from "../interfaces/author";
import Author from "../schema/Author";
import AuthorInput from "../schema/AuthorInput";

@Resolver(() => Author)
export default class AuthorResolver {
  @Query(() => [Author])
  async authors() {
    return await db.from("authors").orderBy("name");
  }

  @Query(() => Author, { nullable: true })
  async author(@Arg("id") id: string) {
    const author = await db("authors").where({ id }).first();

    if (!author) return null;

    return author;
  }

  @FieldResolver()
  async books(@Root() author: AuthorType) {
    const books = await db("books").where({ authorId: author.id });

    if (!books) return null;

    return books;
  }

  @Mutation(() => Boolean)
  async addAuthor(@Arg("data") { name, age }: AuthorInput) {
    try {
      await db("authors").insert({ name, age });
    } catch (err) {
      console.log(err);
      return false;
    }

    return true;
  }
}
