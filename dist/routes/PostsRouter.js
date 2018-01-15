"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Posts = require('../json/posts');
class PostsRouter {
    /**
     * Initialize the HeroRouter
     */
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    /**
     * GET all Users.
     */
    getAll(req, res, next) {
        res.send(Posts);
    }
    /**
     * Take each handler, and attach to one of the Express.Router's
     * endpoints.
     */
    init() {
        this.router.get('/', this.getAll);
    }
}
exports.PostsRouter = PostsRouter;
// Create the usersRouter, and export its configured Express.Router
const postsRouter = new PostsRouter();
postsRouter.init();
exports.default = postsRouter.router;
