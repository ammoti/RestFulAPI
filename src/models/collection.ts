import { Albums } from "./albums";
import { Users } from "./users";
import { Posts } from "./posts";

export interface ICollection{
    Albums:Albums[];
    Users:Users[];
    Posts:Posts[];
}