import * as express from 'express';

class IndexRoute {
    public IndexRouter: express.Router = express.Router();
    
    constructor(){
        this.IndexRouter.get('/',indexPage);
    }
}

async function indexPage(res, req):Promise<any>{
    try {
        res.send({
            message:'index page works!'
        });
      } catch (error) {
          res.send({
              message:'help index page'
          })
      }
}

export const indexRoute: IndexRoute = new IndexRoute();