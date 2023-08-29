import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Item } from 'src/items/entities/item.entity';
import { List } from 'src/lists/entities/list.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'users' })
@ObjectType()
export class User {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column()
  fullName: string;

  @Field(() => String)
  @Column({ unique: true })
  email: string;

  // @Field(() => String)
  @Column()
  password: string;

  @Field(() => [String])
  @Column({ type: 'text', array: true, default: ['user'] })
  roles: string[];

  @Field(() => Boolean)
  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @Field(() => User, { nullable: true })
  @ManyToOne(() => User, (user) => user.lastUpdateBy, {
    nullable: true,
    lazy: true,
  })
  @JoinColumn({ name: 'lastUpdateBy' })
  lastUpdateBy?: User;

  // @Field(() => [Item])
  @OneToMany(() => Item, (item) => item.user, { lazy: true })
  items: Item[];

  // @Field(() => [List])
  @OneToMany(() => List, (list) => list.user)
  lists: List[];
}
