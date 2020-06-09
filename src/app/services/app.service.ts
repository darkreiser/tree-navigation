import { Injectable } from '@angular/core';

import { DatabasesApi } from '../data/data.model';
import { ConnectionItem, DbItem } from '../data/types';

@Injectable()
export class AppService {
    getConnections (): any {
        return DatabasesApi.connections;
    }

    getDetailedDbData (): any {
        return DatabasesApi.detailedDbs;
    }

    enrichData(): any {
        let connections: ConnectionItem[] = this.getConnections();
        const detailedDBs: DbItem[] = this.getDetailedDbData();

        const enrichedConnections = connections.forEach((connection: ConnectionItem) => {
            connection.fullDbs = [];
            connection.dbs.forEach(db => {
                connection.fullDbs.push(detailedDBs[db]);
            })
        });

        return enrichedConnections;
    }
}