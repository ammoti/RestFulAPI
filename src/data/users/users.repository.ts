
import { Injectable } from "injection-js";
import { default as UsersDB  } from "./users";
import { Users,IUsers } from "../../models/users";
import { ICollection } from "../../models/collection";
import {Service} from "typedi";

@Service()
export class UsersRepository{
    users: IUsers = UsersDB;

    getAll(): IUsers{
        return this.users;
    }
    get(id: number | string): Users {
        const array = this.users.Users.filter(p => p.id === id);
        return array[0];
    }
    delete(id: number | string): Boolean {
        const array = this.users.Users.findIndex(p=>p.id===id);
        this.users.Users.splice(array,1);
        return true
    }

    save(user: Users): Users {
        user.id = this.users.Users.length+1;
        this.users.Users.push(user);

        return user;
    }

    update(id: number, user: Users): Users {
        const index = this.users.Users.findIndex((p: Users) => p.id === id);
        this.users.Users[index] = user;

        return user;
    }
    
}