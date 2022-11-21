import { Field, InputType, Int } from '@nestjs/graphql';
import { IsBoolean, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsNotEmpty()
  email: string;

  @Field(() => Int)
  @IsNotEmpty()
  age: number;

  @Field({ nullable: true })
  @IsBoolean()
  isSubscribed?: boolean;
}
