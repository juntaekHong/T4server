import * as bodyParser from 'body-parser';
import * as express from 'express';


export class Server {
    public app: express.Application;
    constructor(){
        this.app = express();
        this.app.get('/console',function(req,res){
            res.send('server is tunning')
        });
        this.app.use(bodyParser.urlencoded({extended:false}));
        this.app.use(bodyParser.json());
    }
}