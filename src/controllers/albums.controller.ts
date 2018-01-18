import {JsonController, Get, Post as HttpPost, Param, Delete, Body,Put,Authorized, UseBefore} from "routing-controllers";
import {Service} from "typedi";
import {AlbumsRepository} from "../data/albums/albums.repository";
import {IAlbums,Albums} from "../models/albums";
import { AuthorizationMiddleware } from "../auth/RequireAuth";

@Service()
@JsonController()
export class AlbumsController {

    constructor(private albumsRepository: AlbumsRepository) {
    }
    @UseBefore(AuthorizationMiddleware)
    @Get("/api/albums")
    all(): IAlbums {
        return this.albumsRepository.getAll();
    }
    @UseBefore(AuthorizationMiddleware)
    @Get("/api/albums/:id")
    one(@Param("id") id: number): Albums {
        return this.albumsRepository.get(id);
    }
    @UseBefore(AuthorizationMiddleware)
    @HttpPost("/api/albums")
    post(@Body() post: Albums): Albums {
        return this.albumsRepository.save(post);
    }
    @UseBefore(AuthorizationMiddleware)
    @Put('/api/albums/:id')
    update(@Param("id") id: number,@Body() post: Albums): Albums {
        return this.albumsRepository.update(id,post);
    }
    @UseBefore(AuthorizationMiddleware)
    @Delete("/api/albums/:id")
    delete(@Param("id") id: number): Boolean {
        return this.albumsRepository.delete(id);
    }

}