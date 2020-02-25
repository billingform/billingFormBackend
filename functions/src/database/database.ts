import { DbViewModel } from '../view-model/db-view-model';

export class DataBase {
    get(params: DbViewModel, formatResultFn?: Function) {
        return params.reference.get().then((query: any) => {
            if (formatResultFn) { query = formatResultFn(query.data()) }
            return query;
        });
    }

    put(params: DbViewModel, merge = true) {
        return params.reference.set(params.setParams, { merge: merge }).then((res: any) => {
            return res
        })
    }
}

export const dataBase = new DataBase();