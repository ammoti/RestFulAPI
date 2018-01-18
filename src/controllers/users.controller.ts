import {JsonController, Get, Post as HttpPost, Param, Delete, Body,Put, Authorized, UseBefore} from "routing-controllers";
import {Service} from "typedi";
import {UsersRepository} from "../data/users/users.repository";
import {IUsers,Users} from "../models/users";
import { AuthorizationMiddleware } from "../auth/RequireAuth";

@Service()
@JsonController()
export class UsersController {

    constructor(private usersRepository: UsersRepository) {
    }
    @UseBefore(AuthorizationMiddleware)
    @Get("/api/users")
    all(): IUsers {
        return this.usersRepository.getAll();
    }
    @UseBefore(AuthorizationMiddleware)
    @Get("/api/users/:id")
    one(@Param("id") id: number): Users {
        return this.usersRepository.get(id);
    }
    @UseBefore(AuthorizationMiddleware)
    @HttpPost("/api/users")
    post(@Body() post: Users): Users {
        return this.usersRepository.save(post);
    }
    @UseBefore(AuthorizationMiddleware)
    @Put('/api/users/:id')
    update(@Param("id") id: number,@Body() post: Users): Users {
        return this.usersRepository.update(id,post);
    }
    @UseBefore(AuthorizationMiddleware)
    @Delete("/api/users/:id")
    delete(@Param("id") id: number): Boolean {
        return this.usersRepository.delete(id);
    }

}