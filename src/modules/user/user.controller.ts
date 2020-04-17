import { Controller, Get, Post, Put, Res, Delete, HttpStatus, Param, Body } from "@nestjs/common";
import { Response } from "express";
import { UserService } from "./user.service";
import { UserDto } from "./user.dto";

@Controller('users')
export class UserController {
  constructor(
    private userService: UserService,
  ) {}

  @Get()
  async findAll(@Res() res: Response) {
    try {
      const response = await this.userService.findAll();
      return res.status(response.status).send(response.data);
    } catch(err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ message: err.message });
    }
  }

  @Get(':id')
  async findOne(@Param('id') id:number, @Res() res: Response) {
    try {
      const response = await this.userService.findOne(id);
      return res.status(response.status).send(response.data);
    } catch(err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ message: err.message });
    }
  }

  @Post()
  async save(@Body() userDto: UserDto, @Res() res: Response) {
    try {
      const response = await this.userService.save(userDto);
      return res.status(response.status).send(response.data);
    } catch(err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ message: err.message });
    }
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() userDto: UserDto, @Res() res: Response) {
    try {
      const response = await this.userService.update(id, userDto);
      return res.status(response.status).send(response.data);
    } catch(err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ message: err.message });

    }
  }

  @Delete(':id')
  async remove(@Param('id') id: number, @Res() res: Response) {
    try {
      const response = await this.userService.remove(id);
      return res.status(response.status).send(response.data);
    } catch(err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ message: err.message });

    }
  }

}
