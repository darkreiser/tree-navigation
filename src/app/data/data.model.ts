import { ConnectionTypes } from '../misc/types';
import { Utils } from '../misc/utils';

export class DatabasesApi {
    static connections = [
        { 
            id: Utils.generateId(),
            title: 'PostgresSQL (Generic) - postgres',
            type: ConnectionTypes.postgres,
            hasPermission: true,
            dbs: ['dbId1', 'dbId2']
        },
        { 
            id: Utils.generateId(),
            title: 'PostgresSQL - ident',
            type: ConnectionTypes.postgres,
            hasPermission: false,
            dbs: []
        },
        { 
            id: Utils.generateId(),
            title: 'PostgresSQL - test',
            type: ConnectionTypes.postgres,
            hasPermission: false,
            dbs: []
        },
        { 
            id: Utils.generateId(),
            title: 'PostgresSQL - test (no pwd)',
            type: ConnectionTypes.postgres,
            hasPermission: false,
            dbs: []
        },
        {
            id: Utils.generateId(),
            title: 'SQLite - chinook',
            type: ConnectionTypes.sqlite,
            hasPermission: true,
            dbs: ['dbId5', 'dbId7']
        },
        {
            id: Utils.generateId(),
            title: 'SQLite - hasPermission',
            type: ConnectionTypes.sqlite,
            hasPermission: true,
            dbs: ['dbId3', 'dbId4']
        },
        {
            id: Utils.generateId(),
            title: 'SQLite - sample_db',
            type: ConnectionTypes.sqlite,
            hasPermission: false,
            dbs: []
        },
        {
            id: Utils.generateId(),
            title: 'SQLite - test',
            type: ConnectionTypes.sqlite,
            hasPermission: false,
            dbs: []
        },
        {
            id: Utils.generateId(),
            title: 'MongoDb - test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1',
            type: ConnectionTypes.mongoDB,
            hasPermission: true,
            dbs: ['dbId8', 'dbId10']
        },
        {
            id: Utils.generateId(),
            title: 'MongoDb - test',
            type: ConnectionTypes.mongoDB,
            hasPermission: true,
            dbs: ['dbId9']
        },
    ];

    static detailedDbs = {
        'dbId1': {
            id: Utils.generateId(),
            title: 'Postgres',
            hasPermission: true,
            icon: 'database',
            schemas: [
                {
                    id: Utils.generateId(),
                    icon: 'schema',
                    title: 'topology',
                    tables: [
                        {
                            id: Utils.generateId(),
                            icon: 'table',
                            title: 'Tables',
                            columns: [
                                {
                                    id: Utils.generateId(),
                                    icon: 'column',
                                    title: 'layer'
                                },
                                {
                                    id: Utils.generateId(),
                                    icon: 'column',
                                    title: 'newColumn'
                                },
                                {
                                    id: Utils.generateId(),
                                    icon: 'column',
                                    title: 'topology'
                                }
                            ]
                        }
                    ]   
                }
            ]
        },
        'dbId2': {
            id: Utils.generateId(),
            title: 'playground_temp',
            hasPermission: false,
            icon: 'database',
            schemas: []
        },
        'dbId3': {
            id: Utils.generateId(),
            title: 'frontend_db',
            hasPermission: true,
            icon: 'database',
            schemas: [
                {
                    id: Utils.generateId(),
                    icon: 'schema',
                    title: 'users',
                    tables: [
                        {
                            id: Utils.generateId(),
                            icon: 'table',
                            title: 'Names',
                            columns: [
                                {
                                    id: Utils.generateId(),
                                    icon: 'column',
                                    title: 'first'
                                },
                                {
                                    id: Utils.generateId(),
                                    icon: 'column',
                                    title: 'middle'
                                },
                                {
                                    id: Utils.generateId(),
                                    icon: 'column',
                                    title: 'last'
                                }
                            ]
                        }
                    ]   
                },
                {
                    id: Utils.generateId(),
                    icon: 'schema',
                    title: 'animals',
                    tables: [
                        {
                            id: Utils.generateId(),
                            icon: 'table',
                            title: 'dogs',
                            columns: [
                                {
                                    id: Utils.generateId(),
                                    icon: 'column',
                                    title: 'type'
                                },
                                {
                                    id: Utils.generateId(),
                                    icon: 'column',
                                    title: 'age'
                                },
                                {
                                    id: Utils.generateId(),
                                    icon: 'column',
                                    title: 'name'
                                }
                            ]
                        },
                        {
                            id: Utils.generateId(),
                            icon: 'table',
                            title: 'cats',
                            columns: [
                                {
                                    id: Utils.generateId(),
                                    icon: 'column',
                                    title: 'type'
                                },
                                {
                                    id: Utils.generateId(),
                                    icon: 'column',
                                    title: 'age'
                                },
                                {
                                    id: Utils.generateId(),
                                    icon: 'column',
                                    title: 'name'
                                }
                            ]
                        }
                    ]   
                }
            ]
        },
        'dbId4': {
            id: Utils.generateId(),
            title: 'post_sample',
            hasPermission: false,
            icon: 'database',
            schemas: [
                {
                    id: Utils.generateId(),
                    icon: 'schema',
                    title: 'topology',
                    tables: [
                        {
                            id: Utils.generateId(),
                            icon: 'table',
                            title: 'Tables',
                            columns: [
                                {
                                    id: Utils.generateId(),
                                    icon: 'column',
                                    title: 'layer'
                                }
                            ]
                        }
                    ]   
                }
            ]
        },
        'dbId5': {
            id: Utils.generateId(),
            title: 'SQLite - backend',
            hasPermission: true,
            icon: 'database',
            schemas: [
                {
                    id: Utils.generateId(),
                    icon: 'schema',
                    title: 'scrapes',
                    tables: [
                        {
                            id: Utils.generateId(),
                            icon: 'table',
                            title: 'web',
                            columns: [
                                {
                                    id: Utils.generateId(),
                                    icon: 'column',
                                    title: 'text'
                                },
                                {
                                    id: Utils.generateId(),
                                    icon: 'column',
                                    title: 'img'
                                },
                                {
                                    id: Utils.generateId(),
                                    icon: 'column',
                                    title: 'date'
                                }
                            ]
                        },
                        {
                            id: Utils.generateId(),
                            icon: 'table',
                            title: 'dark_web',
                            columns: [
                                {
                                    id: Utils.generateId(),
                                    icon: 'column',
                                    title: 'text'
                                },
                                {
                                    id: Utils.generateId(),
                                    icon: 'column',
                                    title: 'img'
                                },
                                {
                                    id: Utils.generateId(),
                                    icon: 'column',
                                    title: 'date'
                                }
                            ]
                        }
                    ]   
                }
            ]
        },
        'dbId6': {
            id: Utils.generateId(),
            title: 'SQLite - admin',
            hasPermission: false,
            icon: 'database',
            schemas: []
        },
        'dbId7': {
            id: Utils.generateId(),
            title: 'Yoyoyoyo',
            hasPermission: false,
            icon: 'database',
            schemas: [
                {
                    id: Utils.generateId(),
                    icon: 'schema',
                    title: 'topology',
                    tables: [
                        {
                            id: Utils.generateId(),
                            icon: 'table',
                            title: 'Tables',
                            columns: [
                                {
                                    id: Utils.generateId(),
                                    icon: 'column',
                                    title: 'layer'
                                },
                                {
                                    id: Utils.generateId(),
                                    icon: 'column',
                                    title: 'newColumn'
                                },
                                {
                                    id: Utils.generateId(),
                                    icon: 'column',
                                    title: 'topology'
                                }
                            ]
                        }
                    ]   
                }
            ]
        },
        'dbId8': {
            id: Utils.generateId(),
            title: 'mongo_test',
            hasPermission: false,
            icon: 'database',
            schemas: []
        },
        'dbId9': {
            id: Utils.generateId(),
            title: 'mongo_books',
            hasPermission: true,
            icon: 'database',
            schemas: [
                {
                    id: Utils.generateId(),
                    icon: 'schema',
                    title: 'genre',
                    tables: [
                        {
                            id: Utils.generateId(),
                            icon: 'table',
                            title: 'fiction',
                            columns: [
                                {
                                    id: Utils.generateId(),
                                    icon: 'column',
                                    title: 'author'
                                },
                                {
                                    id: Utils.generateId(),
                                    icon: 'column',
                                    title: 'title'
                                }
                            ]
                        },
                        {
                            id: Utils.generateId(),
                            icon: 'table',
                            title: 'bio',
                            columns: [
                                {
                                    id: Utils.generateId(),
                                    icon: 'column',
                                    title: 'author'
                                },
                                {
                                    id: Utils.generateId(),
                                    icon: 'column',
                                    title: 'title'
                                }
                            ]
                        },
                        {
                            id: Utils.generateId(),
                            icon: 'table',
                            title: 'proffessional',
                            columns: [
                                {
                                    id: Utils.generateId(),
                                    icon: 'column',
                                    title: 'author'
                                },
                                {
                                    id: Utils.generateId(),
                                    icon: 'column',
                                    title: 'title'
                                }
                            ]
                        }
                    ]   
                }
            ]
        },
        'dbId10': {
            id: Utils.generateId(),
            title: 'mongo_ttt',
            hasPermission: false,
            icon: 'database',
            schemas: [
                {
                    id: Utils.generateId(),
                    icon: 'schema',
                    title: 'topology',
                    tables: [
                        {
                            id: Utils.generateId(),
                            icon: 'table',
                            title: 'Tables',
                            columns: [
                                {
                                    id: Utils.generateId(),
                                    icon: 'column',
                                    title: 'layer'
                                },
                                {
                                    id: Utils.generateId(),
                                    icon: 'column',
                                    title: 'newColumn'
                                },
                                {
                                    id: Utils.generateId(),
                                    icon: 'column',
                                    title: 'topology'
                                }
                            ]
                        }
                    ]   
                }
            ]
        }
    }
}
