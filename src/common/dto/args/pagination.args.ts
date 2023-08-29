import { ArgsType, Field, Int } from '@nestjs/graphql';
import { IsOptional, Min } from 'class-validator';

@ArgsType()
export class PaginationArgs {
  @Field(() => Int, { name: 'offset', nullable: true })
  @Min(0)
  @IsOptional()
  offset: number = 0;

  @Field(() => Int, { name: 'limit', nullable: true })
  @Min(1)
  @IsOptional()
  limit: number = 10;
}
