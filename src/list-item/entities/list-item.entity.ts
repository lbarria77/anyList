import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Item } from 'src/items/entities/item.entity';
import { List } from 'src/lists/entities/list.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('listItems')
@ObjectType()
export class ListItem {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => Number)
  @Column({ type: 'numeric' })
  quantity: number;

  @Field(() => Boolean)
  @Column({ type: 'boolean', default: false })
  completed: boolean;

  @Field(() => List)
  @ManyToOne(() => List, (list) => list.listItem, { lazy: true })
  list: List;

  @Field(() => Item)
  @ManyToOne(() => Item, (item) => item.listItem, { lazy: true })
  item: Item;
}
