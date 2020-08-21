import { Length } from "class-validator";
import { InputType, Field } from "type-graphql";

import Author from "./Author";

@InputType()
export default class AuthorInput implements Partial<Author> {
  @Field()
  @Length(1, 255)
  name: string;

  @Field()
  age: number;
}
