import * as express from 'express';
import * as cors from 'cors';
import * as bodyparser from 'body-parser';
import { requestLoggerMiddleware } from './requestLoggerMiddleware';
import { todoRoutes } from './todocontroller';
const app = express();
app.use(cors());
app.use(bodyparser.json());
// TODO - add middleware here
app.use(requestLoggerMiddleware);
app.use(todoRoutes);
export {app};