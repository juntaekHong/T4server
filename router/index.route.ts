import * as express from 'express';

class IndexRoute {
    public IndexRouter: express.Router = express.Router();
    constructor(){
        this.IndexRouter.get('/',function(req,res,next){
            res.send({
                message: 'index Page'
            });
        });

        
    }
}

export const indexRoute: IndexRoute = new IndexRoute();