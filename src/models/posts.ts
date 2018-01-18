export class Posts{
    userId:number;
    id:number;
    title:string;
    body:string;
}

export interface IPosts{
    Posts:Posts[]
}