import {JsonController, Get, Post as HttpPost, Param, Delete, Body,Put,Authorized, UseBefore} from "routing-controllers";
import {Service} from "typedi";
import {UsersRepository} from "../data/users/users.repository";
import {IUsers,Users} from "../models/users";
import {AlbumsRepository} from "../data/albums/albums.repository";
import {IAlbums,Albums} from "../models/albums";
import {PostRepository} from "../data/posts/posts.repository";
import {IPosts,Posts} from "../models/posts";
import {ICollection} from "../models/collection";
import { AuthorizationMiddleware } from "../auth/RequireAuth";

@Service()
@JsonController()
export class CollectionContRoller {

    constructor(private usersRepository: UsersRepository,private albumsRepository: AlbumsRepository,private postsRepository: PostRepository) {
    }
    @UseBefore(AuthorizationMiddleware)
    @Get("/api/collection")
    all(): any {
        let users:IUsers=this.usersRepository.getAll();
        let albums:IAlbums=this.albumsRepository.getAll();
        let posts:IPosts=this.postsRepository.getAll();

        let randomPosts:Array<Posts>=[]; 
        let randomUsers:Array<Users>=[];
        let randomAlbums:Array<Albums>=[];
        
        let randomIndex:Array < number >  = []; 
        let counter:number = 0; 
        while (counter < 10) {
            let randomInt:number = Math.floor(Math.random() * posts.Posts.length); 
            if (randomIndex.indexOf(randomInt) == -1) {
                let item:Posts = posts.Posts[randomInt]; 
                randomPosts.push(item); 
                randomIndex.push(randomInt);             
                counter++; 
            }
        }
        counter =0;
        randomIndex = [];
        while (counter < 10) {
            let randomInt:number = Math.floor(Math.random() * users.Users.length); 
            if (randomIndex.indexOf(randomInt) == -1) {
                let item:Users = users.Users[randomInt]; 
                randomUsers.push(item); 
                randomIndex.push(randomInt);             
                counter++; 
            }
        }
        counter = 0;
        randomIndex=[];
        while (counter < 10) {
            let randomInt:number = Math.floor(Math.random() * albums.Albums.length); 
            if (randomIndex.indexOf(randomInt) == -1) {
                let item:Albums = albums.Albums[randomInt]; 
                randomAlbums.push(item); 
                randomIndex.push(randomInt);             
                counter++; 
            }
        }
        let output: JSON;
        let response: any = 
        {
            'post':randomPosts,
            'album' : randomAlbums,
            'user':randomUsers
        }
        output = <JSON>response;
        return output;
    }

}