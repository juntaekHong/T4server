import * as sequelize from 'sequelize';
import { Sequelize } from 'sequelize-typescript';

class Db {
    public  sequelize: Sequelize;
    constructor(){
        this.sequelize = new Sequelize({
            database: 't4',
            dialect : 'mysql',
            username: 'root',
            password:'',
            storage: ':memory:',
            models: [__dirname + '/models'],
          });   
    }
}

export const db: Db = new Db();
