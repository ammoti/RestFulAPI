"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Posts = require('../json/posts');
const Albums = require('../json/albums');
const Users = require('../json/users');
class CollectionRouter {
    /**
     * Initialize the HeroRouter
     */
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    /**
     * picker
   :any  */
    picker() {
        return "Ammoti";
    }
    /**
     * GET all Users.
     */
    getAll(req, res, next) {
        let randomPosts = [];
        let randomUsers = [];
        let randomAlbums = [];
        let randomIndex = [];
        let counter = 0;
        while (counter < 10) {
            let randomInt = Math.floor(Math.random() * Posts.length);
            if (randomIndex.indexOf(randomInt) == -1) {
                let item = Posts[randomInt];
                randomPosts.push(item);
                randomIndex.push(randomInt);
                counter++;
            }
        }
        counter = 0;
        randomIndex = [];
        while (counter < 10) {
            let randomInt = Math.floor(Math.random() * Users.length);
            if (randomIndex.indexOf(randomInt) == -1) {
                let item = Users[randomInt];
                randomUsers.push(item);
                randomIndex.push(randomInt);
                counter++;
            }
        }
        counter = 0;
        randomIndex = [];
        while (counter < 10) {
            let randomInt = Math.floor(Math.random() * Albums.length);
            if (randomIndex.indexOf(randomInt) == -1) {
                let item = Albums[randomInt];
                randomAlbums.push(item);
                randomIndex.push(randomInt);
                counter++;
            }
        }
        let output;
        let response = {
            'post': randomPosts,
            'album': randomAlbums,
            'user': randomUsers
        };
        output = response;
        res.send(output);
    }
    /**
     * Take each handler, and attach to one of the Express.Router's
     * endpoints.
     */
    init() {
        this.router.get('/', this.getAll);
    }
}
exports.CollectionRouter = CollectionRouter;
// Create the usersRouter, and export its configured Express.Router
const collectionRouter = new CollectionRouter();
collectionRouter.init();
exports.default = collectionRouter.router;
