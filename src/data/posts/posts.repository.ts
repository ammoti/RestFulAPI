
import { Injectable } from "injection-js";
import { default as PostsDB  } from "./posts";
import { Posts,IPosts } from "../../models/posts";
import {Service} from "typedi";

@Service()
export class PostRepository{
    posts: IPosts = PostsDB;

    getAll(): IPosts{
        return this.posts;
    }
    get(id: number | string): Posts {
        const array = this.posts.Posts.filter(p => p.id === id);
        return array[0];
    }

    save(post: Posts): Posts {
        post.id = this.posts.Posts.length+1;
        this.posts.Posts.push(post);

        return post;
    }

    update(id: number, post: Posts): Posts {
        const index = this.posts.Posts.findIndex((p: Posts) => p.id === id);
        this.posts.Posts[index] = post;

        return post;
    }
    delete(id: number | string): Boolean {
        const array = this.posts.Posts.findIndex(p=>p.id===id);
        this.posts.Posts.splice(array,1);
        return true
    }
}