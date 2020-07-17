import { Field, ObjectType, ID } from "type-graphql";
import Author from "./Author";

@ObjectType()
export default class Book {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  genre: string;

  @Field()
  author: Author;
}
