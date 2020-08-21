import { ObjectType, Field, ID } from "type-graphql";
import Book from "./Book";
@ObjectType()
export default class Author {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  age: number;

  @Field(() => [Book], { nullable: true })
  books: Book[];
}
