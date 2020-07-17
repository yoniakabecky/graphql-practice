import { Field, ObjectType, ID } from "type-graphql";

@ObjectType()
export default class Book {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  genre: string;
}
