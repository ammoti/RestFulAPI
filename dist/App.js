"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const AlbumsRouter_1 = require("./routes/AlbumsRouter");
const UsersRouter_1 = require("./routes/UsersRouter");
const PostsRouter_1 = require("./routes/PostsRouter");
const CollectionRouter_1 = require("./routes/CollectionRouter");
// Creates and configures an ExpressJS web server.
class App {
    //Run configuration methods on the Express instance.
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }
    // Configure Express middleware.
    middleware() {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }
    // Configure API endpoints.
    routes() {
        /* This is just to get up and running, and to make sure what we've got is
         * working so far. This function will change when we start to add more
         * API endpoints */
        this.express.use('/api/v1/posts', PostsRouter_1.default);
        this.express.use('/api/v1/albums', AlbumsRouter_1.default);
        this.express.use('/api/v1/users', UsersRouter_1.default);
        this.express.use('/api/v1/collection', CollectionRouter_1.default);
    }
}
exports.default = new App().express;
