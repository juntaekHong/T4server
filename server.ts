import * as express from 'express';
import { Server } from './app';

const port: number = 8001;
const app: express.Application = new Server().app;
app.set('port', port);
app.listen(app.get('port'), async()=>{
    console.log('server is running');
}).on('error', err =>{
    console.error(err);
})



