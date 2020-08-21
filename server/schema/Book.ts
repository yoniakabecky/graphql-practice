import { Field, ObjectType, ID } from "type-graphql";
import Author from "./Author";

@ObjectType()
export default class Book {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  genre: string;

  @Field(() => Author)
  author: Author;
}
