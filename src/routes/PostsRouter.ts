import {Router, Request, Response, NextFunction} from 'express';
const Posts = require('../json/posts');

export class PostsRouter {
  router: Router

  /**
   * Initialize the HeroRouter
   */
  constructor() {
    this.router = Router();
    this.init();
  }

  /**
   * GET all Users.
   */
  public getAll(req: Request, res: Response, next: NextFunction) {
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

// Create the usersRouter, and export its configured Express.Router
const postsRouter = new PostsRouter();
postsRouter.init();

export default postsRouter.router;
