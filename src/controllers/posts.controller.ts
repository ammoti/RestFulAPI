import {JsonController, Get, Post as HttpPost, Param, Delete, Body,Put,Authorized, UseBefore} from "routing-controllers";
import {Service} from "typedi";
import {PostRepository} from "../data/posts/posts.repository";
import {IPosts,Posts} from "../models/posts";
import { AuthorizationMiddleware } from "../auth/RequireAuth";

@Service()
@JsonController()
export class PostsController {

    constructor(private postRepository: PostRepository) {
    }
    @UseBefore(AuthorizationMiddleware)
    @Get("/api/posts")
    all(): IPosts {
        return this.postRepository.getAll();
    }
    @UseBefore(AuthorizationMiddleware)
    @Get("/api/posts/:id")
    one(@Param("id") id: number): Posts {
        return this.postRepository.get(id);
    }
    @UseBefore(AuthorizationMiddleware)
    @HttpPost("/api/posts")
    post(@Body() post: Posts): Posts {
        return this.postRepository.save(post);
    }
    @UseBefore(AuthorizationMiddleware)
    @Put('/api/posts/:id')
    update(@Param("id") id: number,@Body() post: Posts): Posts {
        return this.postRepository.update(id,post);
    }
    @UseBefore(AuthorizationMiddleware)
    @Delete("/api/posts/:id")
    delete(@Param("id") id: number): Boolean {
        return this.postRepository.delete(id);
    }

}