
import { Injectable } from "injection-js";
import { default as AlbumsDB  } from "./albums";
import { Albums,IAlbums } from "../../models/albums";
import {Service} from "typedi";

@Service()
export class AlbumsRepository{
    albums: IAlbums = AlbumsDB;

    getAll(): IAlbums{
        return this.albums;
    }
    get(id: number | string): Albums {
        const array = this.albums.Albums.filter(p => p.id === id);
        return array[0];
    }

    save(album: Albums): Albums {
        album.id = this.albums.Albums.length+1;
        this.albums.Albums.push(album);

        return album;
    }

    update(id: number, post: Albums): Albums {
        const index = this.albums.Albums.findIndex((p: Albums) => p.id === id);
        this.albums.Albums[index] = post;

        return post;
    }
    delete(id: number | string): Boolean {
        const array = this.albums.Albums.findIndex(p=>p.id===id);
        this.albums.Albums.splice(array,1);
        return true
    }
}