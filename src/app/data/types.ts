export interface ItemBase {
    id: string;
    title: string;
    icon?: string;
}

export interface Table {
    id: string;
    title: string;
    icon?: string;
    columns: ItemBase[]
}

export interface Schema {
    id: string;
    title: string;
    icon?: string; 
    tables: Table[]
}

export interface DbItem {
    id: string;
    title: string;
    hasPermission: boolean;
    icon: string;
    schemas?: Schema[];
}

export interface ConnectionItem {
    id: string;
    title: string;
    hasPermission: boolean;
    type?: ConnectionTypes;
    dbs?: string[];
    fullDbs?: DbItem[]
}


export enum ConnectionTypes {
    postgres = 'Postgres',
    sqlite = 'SQLite',
    mongoDB = 'MongoDB'
}