import * as express from 'express';
import {userService} from '../service/user.service'

class SignRoute {
    public signRouter: express.Router = express.Router();
    constructor(){
        this.signRouter.get('/signUp',async function(req,res,next){
            const userId = req.body.userId;
            const userPw = req.body.userPw;
            
            const result = await userService.createUser({
                userId,
                userPw
            })

            res.send({
                message: 'index Page'
            });
        });
        
    }
}

export const signRoute: SignRoute = new SignRoute();