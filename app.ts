import * as bodyParser from 'body-parser';
import * as express from 'express';
import cookieParser from 'cookie-parser';
import { indexRoute } from './router/index.route'
import { signRoute } from './router/sign.route'
import { db } from './db'
export class Server {

    public app: express.Application;
    public port: (string | number);
    public env: boolean;

    constructor(){
        this.app = express();
        //this.env = process.env.NODE_ENV === 'production'? true:false;

        this.initMiddlewares();
        this.app.use(indexRoute.IndexRouter);
        this.app.use(signRoute.signRouter);
        this.app.get('/console',function(req,res){
            res.send(`server is tunning on port${this.port}`)
        });
        
        //db.sequelize.sync({force: true});
    }

    private initMiddlewares(){
            this.app.use(bodyParser.urlencoded({extended:false}));
            this.app.use(bodyParser.json());
    }

}