import { Field, InputType, Int } from '@nestjs/graphql';
import { IsBoolean, IsNotEmpty, IsOptional, IsUUID } from 'class-validator';

@InputType()
export class UpdateUserInput {
  @Field()
  @IsNotEmpty()
  @IsUUID()
  id: string;

  @Field()
  @IsOptional()
  @IsNotEmpty()
  name?: string;

  @Field()
  @IsOptional()
  @IsNotEmpty()
  email?: string;

  @Field(() => Int)
  @IsOptional()
  @IsNotEmpty()
  age?: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsBoolean()
  isSubscribed?: boolean;
}
