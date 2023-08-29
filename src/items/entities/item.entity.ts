import { Field, ID, ObjectType } from '@nestjs/graphql';
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

@Entity({ name: 'items' })
@ObjectType()
export class Item {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column()
  name: String;

  // @Field(() => String, { nullable: true })
  // @Column()
  // category: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  quantityUnits?: String;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.items, { nullable: false, lazy: true })
  @Index('userId-index')
  user: User;

  @Field(() => [ListItem])
  @OneToMany(() => ListItem, (listItem) => listItem.item, { lazy: true })
  listItem: ListItem[];
}
