import { Field, ObjectType } from "type-graphql";
import { BaseEntity, BeforeInsert, Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { v4 } from "uuid";
import { User } from "./User";

@ObjectType()
@Entity()
export class Group extends BaseEntity {
  @Field(() => String)
  @PrimaryColumn("uuid")
  id: string;

  @Field(() => String)
  @Column("text")
  name: string;

  //this takes on the format of APPNAME_ACTION
  //only includes the allowed actions
  @Field(() => [String], { nullable: true })
  @Column("text", { array: true, nullable: true })
  permissions: string[];

  @Field(() => User)
  @OneToMany(() => User, (user) => user.groups)
  user: User;

  @BeforeInsert()
  addId() {
    this.id = v4();
  }
}
