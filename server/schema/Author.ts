import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export default class Author {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  age: number;
}
