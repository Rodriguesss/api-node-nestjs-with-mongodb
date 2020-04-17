import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from 'class-validator';
import { DateColumns } from "src/shared/classes/date-columns";

export class UserDto extends DateColumns{

  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty()
  @IsNotEmpty()
  date: Date;

}