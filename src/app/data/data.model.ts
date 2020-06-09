import { ConnectionTypes } from './types';

function generateId(): string {
    return (Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
}

export class DatabasesApi {
    static connections = [
        { 
            id: generateId(),
            title: 'PostgresSQL (Generic) - postgres',
            type: ConnectionTypes.postgres,
            hasPermission: true,
            dbs: ['dbId1', 'dbId2']
        },
        { 
            id: generateId(),
            title: 'PostgresSQL - ident',
            type: ConnectionTypes.postgres,
            hasPermission: false,
            dbs: []
        },
        { 
            id: generateId(),
            title: 'PostgresSQL - test',
            type: ConnectionTypes.postgres,
            hasPermission: false,
            dbs: []
        },
        { 
            id: generateId(),
            title: 'PostgresSQL - test (no pwd)',
            type: ConnectionTypes.postgres,
            hasPermission: false,
            dbs: []
        },
        {
            id: generateId(),
            title: 'SQLite - chinook',
            type: ConnectionTypes.sqlite,
            hasPermission: true,
            dbs: ['dbId5', 'dbId7']
        },
        {
            id: generateId(),
            title: 'SQLite - hasPermission',
            type: ConnectionTypes.sqlite,
            hasPermission: true,
            dbs: ['dbId3', 'dbId4']
        },
        {
            id: generateId(),
            title: 'SQLite - sample_db',
            type: ConnectionTypes.sqlite,
            hasPermission: false,
            dbs: []
        },
        {
            id: generateId(),
            title: 'SQLite - test',
            type: ConnectionTypes.sqlite,
            hasPermission: false,
            dbs: []
        },
        {
            id: generateId(),
            title: 'MongoDb - test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1',
            type: ConnectionTypes.mongoDB,
            hasPermission: true,
            dbs: ['dbId8', 'dbId10']
        },
        {
            id: generateId(),
            title: 'MongoDb - test',
            type: ConnectionTypes.mongoDB,
            hasPermission: true,
            dbs: ['dbId9']
        },
    ];

    static detailedDbs = {
        'dbId1': {
            id: generateId(),
            title: 'Postgres',
            hasPermission: true,
            icon: 'database',
            schemas: [
                {
                    id: generateId(),
                    icon: 'schema',
                    title: 'topology',
                    tables: [
                        {
                            id: generateId(),
                            icon: 'table',
                            title: 'Tables',
                            columns: [
                                {
                                    id: generateId(),
                                    icon: 'column',
                                    title: 'layer'
                                },
                                {
                                    id: generateId(),
                                    icon: 'column',
                                    title: 'newColumn'
                                },
                                {
                                    id: generateId(),
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
            id: generateId(),
            title: 'playground_temp',
            hasPermission: false,
            icon: 'database',
            schemas: []
        },
        'dbId3': {
            id: generateId(),
            title: 'frontend_db',
            hasPermission: true,
            icon: 'database',
            schemas: [
                {
                    id: generateId(),
                    icon: 'schema',
                    title: 'users',
                    tables: [
                        {
                            id: generateId(),
                            icon: 'table',
                            title: 'Names',
                            columns: [
                                {
                                    id: generateId(),
                                    icon: 'column',
                                    title: 'first'
                                },
                                {
                                    id: generateId(),
                                    icon: 'column',
                                    title: 'middle'
                                },
                                {
                                    id: generateId(),
                                    icon: 'column',
                                    title: 'last'
                                }
                            ]
                        }
                    ]   
                },
                {
                    id: generateId(),
                    icon: 'schema',
                    title: 'animals',
                    tables: [
                        {
                            id: generateId(),
                            icon: 'table',
                            title: 'dogs',
                            columns: [
                                {
                                    id: generateId(),
                                    icon: 'column',
                                    title: 'type'
                                },
                                {
                                    id: generateId(),
                                    icon: 'column',
                                    title: 'age'
                                },
                                {
                                    id: generateId(),
                                    icon: 'column',
                                    title: 'name'
                                }
                            ]
                        },
                        {
                            id: generateId(),
                            icon: 'table',
                            title: 'cats',
                            columns: [
                                {
                                    id: generateId(),
                                    icon: 'column',
                                    title: 'type'
                                },
                                {
                                    id: generateId(),
                                    icon: 'column',
                                    title: 'age'
                                },
                                {
                                    id: generateId(),
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
            id: generateId(),
            title: 'post_sample',
            hasPermission: false,
            icon: 'database',
            schemas: [
                {
                    id: generateId(),
                    icon: 'schema',
                    title: 'topology',
                    tables: [
                        {
                            id: generateId(),
                            icon: 'table',
                            title: 'Tables',
                            columns: [
                                {
                                    id: generateId(),
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
            id: generateId(),
            title: 'SQLite - backend',
            hasPermission: true,
            icon: 'database',
            schemas: [
                {
                    id: generateId(),
                    icon: 'schema',
                    title: 'scrapes',
                    tables: [
                        {
                            id: generateId(),
                            icon: 'table',
                            title: 'web',
                            columns: [
                                {
                                    id: generateId(),
                                    icon: 'column',
                                    title: 'text'
                                },
                                {
                                    id: generateId(),
                                    icon: 'column',
                                    title: 'img'
                                },
                                {
                                    id: generateId(),
                                    icon: 'column',
                                    title: 'date'
                                }
                            ]
                        },
                        {
                            id: generateId(),
                            icon: 'table',
                            title: 'dark_web',
                            columns: [
                                {
                                    id: generateId(),
                                    icon: 'column',
                                    title: 'text'
                                },
                                {
                                    id: generateId(),
                                    icon: 'column',
                                    title: 'img'
                                },
                                {
                                    id: generateId(),
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
            id: generateId(),
            title: 'SQLite - admin',
            hasPermission: false,
            icon: 'database',
            schemas: []
        },
        'dbId7': {
            id: generateId(),
            title: 'Yoyoyoyo',
            hasPermission: false,
            icon: 'database',
            schemas: [
                {
                    id: generateId(),
                    icon: 'schema',
                    title: 'topology',
                    tables: [
                        {
                            id: generateId(),
                            icon: 'table',
                            title: 'Tables',
                            columns: [
                                {
                                    id: generateId(),
                                    icon: 'column',
                                    title: 'layer'
                                },
                                {
                                    id: generateId(),
                                    icon: 'column',
                                    title: 'newColumn'
                                },
                                {
                                    id: generateId(),
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
            id: generateId(),
            title: 'mongo_test',
            hasPermission: false,
            icon: 'database',
            schemas: []
        },
        'dbId9': {
            id: generateId(),
            title: 'mongo_books',
            hasPermission: true,
            icon: 'database',
            schemas: [
                {
                    id: generateId(),
                    icon: 'schema',
                    title: 'genre',
                    tables: [
                        {
                            id: generateId(),
                            icon: 'table',
                            title: 'fiction',
                            columns: [
                                {
                                    id: generateId(),
                                    icon: 'column',
                                    title: 'author'
                                },
                                {
                                    id: generateId(),
                                    icon: 'column',
                                    title: 'title'
                                }
                            ]
                        },
                        {
                            id: generateId(),
                            icon: 'table',
                            title: 'bio',
                            columns: [
                                {
                                    id: generateId(),
                                    icon: 'column',
                                    title: 'author'
                                },
                                {
                                    id: generateId(),
                                    icon: 'column',
                                    title: 'title'
                                }
                            ]
                        },
                        {
                            id: generateId(),
                            icon: 'table',
                            title: 'proffessional',
                            columns: [
                                {
                                    id: generateId(),
                                    icon: 'column',
                                    title: 'author'
                                },
                                {
                                    id: generateId(),
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
            id: generateId(),
            title: 'mongo_ttt',
            hasPermission: false,
            icon: 'database',
            schemas: [
                {
                    id: generateId(),
                    icon: 'schema',
                    title: 'topology',
                    tables: [
                        {
                            id: generateId(),
                            icon: 'table',
                            title: 'Tables',
                            columns: [
                                {
                                    id: generateId(),
                                    icon: 'column',
                                    title: 'layer'
                                },
                                {
                                    id: generateId(),
                                    icon: 'column',
                                    title: 'newColumn'
                                },
                                {
                                    id: generateId(),
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
