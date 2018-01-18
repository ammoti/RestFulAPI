import { Middleware, UnauthorizedError, UseBefore,ExpressMiddlewareInterface, HttpError } from "routing-controllers";
import * as express from "express";

export class Unauthorization extends HttpError {
    public operationName: string;
    public args: any[];

    constructor(operationName: string, args: any[] = []) {
        super(501);
        Object.setPrototypeOf(this, Unauthorization.prototype);
        this.operationName = operationName;
        this.args = args; // can be used for internal logging
    }

    toJSON() {
        return {
            status: this.httpCode,
            failedOperation: this.operationName
        }
    }
}