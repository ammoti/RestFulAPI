import "reflect-metadata";
import {createExpressServer, useContainer, useExpressServer, Middleware, UnauthorizedError} from "routing-controllers";
import {Container} from "typedi";
import {AlbumsController} from "./controllers/albums.controller";
import {PostsController} from "./controllers/posts.controller";
import {UsersController} from "./controllers/users.controller";
import {CollectionContRoller} from "./controllers/collection.controller";
import { Response } from "express-serve-static-core";

/**
 * Setup routing-controllers to use typedi container.
 */
useContainer(Container);

/**
 * We create a new express server instance.
 * We could have also use useExpressServer here to attach controllers to an existing express instance.
 */
export const expressApp = createExpressServer({
    /**
     * We can add options about how routing-controllers should configure itself.
     * Here we specify what controllers should be registered in our express server.
     */
    controllers: [
      AlbumsController,
      PostsController,
      UsersController,
      CollectionContRoller
    ]   
}).listen(3000);

console.log("Server is up and running at port 3000");
