import * as Koa from 'koa';
import * as bodyParser from 'koa-body';
import * as Router from 'koa-router';
import { verifyCreditCard } from './lib/verifyCard';

const app = new Koa();
const _ = new Router();

_.post('/creditcard/verify', verifyCreditCard);

app
.use(bodyParser())
.use(_.routes())
export const server = app.listen(3000);