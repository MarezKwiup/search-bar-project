export type SearchItem=
    |Person|FileItem|FolderItem|VideoItem|ImageItem;

export interface BaseItem{
    id:string;
    type:'person'|'file'|'folder'|'video'|'image';
    name:string;
    highlight?:string
}

export interface Person extends BaseItem{
    type:'person';
    photoUrl:string;
    status:'active'|'inactive'|'unactivated';
    lastActive:string;
}

export interface FileItem extends BaseItem{
    type:'file';
    fileType:'pdf'|'doc'|'presentation'|'spreadsheet'|'other';
    path:string;
    edited:string;
    actions?:["open",'copy'];
}

export interface FolderItem extends BaseItem{
    type:'folder';
    fileCount:number;
    path:string;
    edited:string;
}

export interface VideoItem extends BaseItem{
    type:'video';
    path:string;
    added:string;
}

export interface ImageItem extends BaseItem{
    type:'image';
    imageUrl:string;
    path:string;
    edited:string;
    resolution?:string;
}