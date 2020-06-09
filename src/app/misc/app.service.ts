import { Injectable } from '@angular/core';

import { DatabasesApi } from '../data/data.model';
import { ConnectionItem } from './types';
import { Utils } from './utils';

@Injectable()
export class AppService {
    getConnections (): any {
        return DatabasesApi.connections;
    }

    getDetailedDbData (): any {
        return DatabasesApi.detailedDbs;
    }

    enrichData(): any {
        let connections: ConnectionItem[] = Utils.clone(this.getConnections());
        const detailedDBs = this.getDetailedDbData();

        connections.forEach((connection: ConnectionItem) => {
            connection.fullDbs = [];
            connection.dbs.forEach(db => {
                connection.fullDbs.push(detailedDBs[db]);
            })
        });

        return connections;
    }
}