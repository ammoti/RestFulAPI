"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Heroes = require('../json/users');
class UsersRouter {
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
exports.UsersRouter = UsersRouter;
// Create the usersRouter, and export its configured Express.Router
const usersRouter = new UsersRouter();
usersRouter.init();
exports.default = usersRouter.router;
