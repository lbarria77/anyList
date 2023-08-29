import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ListItem } from 'src/list-item/entities/list-item.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  Index,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'lists' })
@ObjectType()
export class List {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  id: string;

  @Field(() => String)
  @Column()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.lists, { nullable: false, lazy: true })
  @Index('userId-list-index')
  user: User;

  // @Field(() => [ListItem])
  @OneToMany(() => ListItem, (listItem) => listItem.list, { lazy: true })
  listItem: ListItem[];
}
