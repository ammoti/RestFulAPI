import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

import AlbumsRouter from './routes/AlbumsRouter';
import UsersRouter from './routes/UsersRouter';
import PostsRouter from './routes/PostsRouter';
import CollectionRouter from './routes/CollectionRouter';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public express: express.Application;

  //Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {
    /* This is just to get up and running, and to make sure what we've got is
     * working so far. This function will change when we start to add more
     * API endpoints */
    this.express.use('/api/v1/posts', PostsRouter);
    this.express.use('/api/v1/albums', AlbumsRouter);
    this.express.use('/api/v1/users', UsersRouter);
    this.express.use('/api/v1/collection',CollectionRouter);
  }

}

export default new App().express;
