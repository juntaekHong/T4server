import * as bodyParser from 'body-parser';
import * as express from 'express';
import { is } from 'bluebird';
import cookieParser from 'cookie-parser';
import { indexRoute } from './router/index.route'
import { db } from './db'
export class Server {

    public app: express.Application;
    public port: (string | number);
    public env: boolean;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.env = process.env.NODE_ENV === 'production'? true:false;

        this.initMiddlewares();

        this.app.get('/console',function(req,res){
            res.send('server is tunning')
        });
        db.sequelize.sync();
    }

    private initMiddlewares(){
            this.app.use(bodyParser.urlencoded({extended:false}));
            this.app.use(bodyParser.json());
    }

    private initRouter(){
        this.app.use(indexRoute.IndexRouter);
    }
}