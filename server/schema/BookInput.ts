import { InputType, Field } from "type-graphql";
import { Length } from "class-validator";

import Book from "./Book";

@InputType()
export default class BookInput implements Partial<Book> {
  @Field()
  @Length(1, 255)
  name: string;

  @Field()
  genre: string;

  @Field()
  authorId: number;
}
