import {Router, Request, Response, NextFunction} from 'express';
const Heroes = require('../json/albums');

export class AlbumsRouter {
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

// Create the usersRouter, and export its configured Express.Router
const albumsRouter = new AlbumsRouter();
albumsRouter.init();

export default albumsRouter.router;
