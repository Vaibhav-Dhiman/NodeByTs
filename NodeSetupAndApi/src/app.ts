import * as express from 'express';
import * as cors from 'cors';
import * as bodyparser from 'body-parser';
import { requestLoggerMiddleware } from './requestLoggerMiddleware';
const app = express();
app.use(cors());
app.use(bodyparser.json());
// TODO - add middleware here
app.use(requestLoggerMiddleware);

app.get('/todo', (req: express.Request, res:express.Response, next: express.NextFunction) => {
    res.json([{id: 1, description: 'Buy beers'}]);
});

app.post('/todo', (req: express.Request, res:express.Response, next: express.NextFunction) => {
    console.info(req.body);
    res.end();
});


app.put('/todo/:id', (req: express.Request, res:express.Response, next: express.NextFunction) => {
    console.info(req.body);
    console.info(req.params.id);
    res.end();
});

app.delete('/todo/:id', (req: express.Request, res:express.Response, next: express.NextFunction) => {
    console.info(req.params.id);
    res.end();
});

export {app};