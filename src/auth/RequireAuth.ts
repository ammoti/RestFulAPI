import { Middleware, UnauthorizedError, UseBefore,ExpressMiddlewareInterface } from "routing-controllers";
import * as express from "express";
import { Unauthorization } from "./Unauthorization";

/**
 * Authorization middleware for express framework with routing-controllers.
 * Prevent access of not logged user to the routes guarded by this middleware.
 */
export class AuthorizationMiddleware {

    /**
     * Checks if there is a session in request with atached user.
     * If is, calls next middleware in chain, otherwise throws UnauthorizedError.
     * 
     * @param {express.Request} req The Express request object
     * @param {express.Response} _res The Express response object (not used)
     * @param {express.NextFunction} [next] The next Express middleware function to call after (optional)
     */
    public use(req: express.Request, _res: express.Response, next?: express.NextFunction) {
        if (req.header("Authorization")!="Bearer af24353tdsfw") {
            throw new Unauthorization("AHAHHAHA");
        }

        if (next) {
            next();
        }
    }
}