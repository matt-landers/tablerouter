import * as express from 'express';
import Table from 'tablecrud';
export default class TableRouter<T> {
    Router: express.Router;
    constructor(table: Table<T>, options?: ITableRouterOptions);
}
export interface ITableRouterOptions {
    canRead?: express.RequestHandler;
    canWrite?: express.RequestHandler;
    canDelete?: express.RequestHandler;
}
//# sourceMappingURL=index.d.ts.map