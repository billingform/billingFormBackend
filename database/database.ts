import { DbViewModel } from '../view-model/db-view-model';

export class DataBase {

    constructor() {
    }

    get(params: DbViewModel, formatResultFn?: Function) {
        return params.reference.get().then(query => {
            if (formatResultFn) { query = formatResultFn(query.data()) }
            return query;
        });
    }

    post() {
        //todo
    }

    put(params: DbViewModel, merge = true) {
        return params.reference.set(params.setParams, { merge: merge }).then((res) => {
            return res
        })
    }

    delete() {
    }

}

export const dataBase = new DataBase();