import {Router, Request, Response, NextFunction}from 'express'; 
const Posts = require('../json/posts'); 
const Albums = require('../json/albums'); 
const Users = require('../json/users'); 

import * as debug from 'debug'; 

export class CollectionRouter {
  router:Router

  /**
   * Initialize the HeroRouter
   */
  constructor() {
    this.router = Router(); 
    this.init(); 
  }

  /**
   * picker
 :any  */
 public picker():any {
    return "Ammoti";
}

  /**
   * GET all Users.
   */
  public getAll(req:Request, res:Response, next:NextFunction) {
    let randomPosts:Array < string >  = []; 
    let randomUsers:Array < string >  = []; 
    let randomAlbums:Array < string >  = []; 
    
    let randomIndex:Array < number >  = []; 
    let counter:number = 0; 
    while (counter < 10) {
        let randomInt:number = Math.floor(Math.random() * Posts.length); 
        if (randomIndex.indexOf(randomInt) == -1) {
            let item:string = Posts[randomInt]; 
            randomPosts.push(item); 
            randomIndex.push(randomInt);             
            counter++; 
        }
    }
    counter =0;
    randomIndex = [];
    while (counter < 10) {
        let randomInt:number = Math.floor(Math.random() * Users.length); 
        if (randomIndex.indexOf(randomInt) == -1) {
            let item:string = Users[randomInt]; 
            randomUsers.push(item); 
            randomIndex.push(randomInt);             
            counter++; 
        }
    }
    counter = 0;
    randomIndex=[];
    while (counter < 10) {
        let randomInt:number = Math.floor(Math.random() * Albums.length); 
        if (randomIndex.indexOf(randomInt) == -1) {
            let item:string = Albums[randomInt]; 
            randomAlbums.push(item); 
            randomIndex.push(randomInt);             
            counter++; 
        }
    }
    let output: JSON;
    let response: any = 
    {
        'post':randomPosts,
        'album' : randomAlbums,
        'user':randomUsers
    }
    output = <JSON>response;
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

// Create the usersRouter, and export its configured Express.Router
const collectionRouter = new CollectionRouter();
collectionRouter.init();

export default collectionRouter.router;
