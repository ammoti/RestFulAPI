"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Heroes = require('../json/albums');
class AlbumsRouter {
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
        res.send(Heroes);
    }
    /**
     * Take each handler, and attach to one of the Express.Router's
     * endpoints.
     */
    init() {
        this.router.get('/', this.getAll);
    }
}
exports.AlbumsRouter = AlbumsRouter;
// Create the usersRouter, and export its configured Express.Router
const albumsRouter = new AlbumsRouter();
albumsRouter.init();
exports.default = albumsRouter.router;
