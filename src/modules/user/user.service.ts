import { Injectable, HttpStatus } from "@nestjs/common";
import { getMongoRepository } from "typeorm";
import { UserDto } from "./user.dto";
import { IResponse } from "src/shared/interfaces/interface.response";
import { SuccessResponse } from "src/shared/responses/sucess.response";
import { ErrorResponse } from "src/shared/responses/error.response";
import { MESSAGES } from "../../shared/enum/message.enum";
import { User } from "./user.entity";

@Injectable()
export class UserService{

    async findAll(): Promise<IResponse> {
      try {
        const userRepository = getMongoRepository(User);
        const users = await userRepository.find({});
        return new SuccessResponse({ data: users }, HttpStatus.OK);
      } catch(err) {
        if (err.hasOwnProperty('hasError')) {
          throw new ErrorResponse({ message: err.error.message }, err.status);
        }
      throw new ErrorResponse({message: err.error.message}, HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }

    async save(userDto: UserDto): Promise<IResponse> {
      try {
        const userRepository = getMongoRepository(User);
        const users = await userRepository.save(userDto);
        return new SuccessResponse({ data: users }, HttpStatus.OK);
      } catch(err) {
        if (err.hasOwnProperty('hasError')) {
          throw new ErrorResponse({ message: err.error.message }, err.status);
        }
      throw new ErrorResponse({message: err.error.message}, HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }

    async findOne(id: number): Promise<IResponse> {
      try {
        const userRepository = getMongoRepository(User);
        const user = await userRepository.findOne(id);

        if (!user) {
          return new ErrorResponse({ message: MESSAGES.NOT_FOUND }, HttpStatus.NOT_FOUND);
        }

        return new SuccessResponse({ data: user }, HttpStatus.OK);
      } catch(err) {
        if (err.hasOwnProperty('hasError')) {
          throw new ErrorResponse({ message: err.error.message }, err.status);
        }
      throw new ErrorResponse({message: err.error.message}, HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }

    async update(id: number, userDto: UserDto): Promise<IResponse> {
      try {
        const userRepository = getMongoRepository(User);
        await userRepository.update(id, userDto);
        return new SuccessResponse({ data: null }, HttpStatus.OK);
      } catch(err) {
        if (err.hasOwnProperty('hasError')) {
          throw new ErrorResponse({ message: err.error.message }, err.status);
        }
      throw new ErrorResponse({message: err.error.message}, HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }

    async remove(id: number): Promise<IResponse> {
      try {
        const userRepository = getMongoRepository(User);
        const user = await userRepository.findOne(id);
        await userRepository.remove(user);
        return new SuccessResponse({ data: null }, HttpStatus.OK);
      } catch(err) {
        if (err.hasOwnProperty('hasError')) {
          throw new ErrorResponse({ message: err.error.message }, err.status);
        }
      throw new ErrorResponse({message: err.error.message}, HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
}
