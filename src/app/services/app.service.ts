import { Injectable } from '@angular/core';

import { DatabasesApi } from '../data/data.model';
import { ConnectionItem } from '../data/types';

@Injectable()
export class AppService {
    getConnections (): any {
        return DatabasesApi.connections;
    }

    getDetailedDbData (): any {
        return DatabasesApi.detailedDbs;
    }

    enrichData(): any {
        const connections: ConnectionItem[] = DatabasesApi.connections;
        const detailedDBs = DatabasesApi.detailedDbs;

        const enrichedConnections = connections.forEach((connection: ConnectionItem) => {
            connection.fullDbs = [];
            connection.dbs.forEach(db => {
                connection.fullDbs.push(detailedDBs[db]);
            })
        });

        return enrichedConnections;
    }
}