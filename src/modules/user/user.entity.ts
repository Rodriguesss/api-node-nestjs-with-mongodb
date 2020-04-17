import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, ObjectIdColumn, ObjectID } from "typeorm";

@Entity()
export class User {

  @ObjectIdColumn()
  id: ObjectID;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  lastName: string;

  @ApiProperty()
  @Column()
  birthday: Date;

}