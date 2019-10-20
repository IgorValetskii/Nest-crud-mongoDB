import {Controller, Get, Post, Put, Delete, Body, Req, Res, Param} from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto";
import {Request, Response} from "express";
import {UsersService} from "./users.service";
import {User} from "./interfaces/user.interface.tp";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService : UsersService){}

    @Get()
   async findAll(): Promise <User[]>{
        return this.usersService.findAll()
    }

    @Get(':id')
   async findOne(@Param('id') id) :Promise <User>{
        return this.usersService.findOne(id);
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.usersService.create(createUserDto);
    }

    @Delete(':id')
    delete(@Param('id') id): Promise<User> {
        return this.usersService.delete(id);
    }

    @Put(':id')
    update(@Body() updateUserDto: CreateUserDto, @Param('id') id): Promise<User> {
        return this.usersService.update(id, updateUserDto);
    }
}
