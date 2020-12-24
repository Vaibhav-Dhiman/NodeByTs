import * as express from 'express';
import { MongoClient } from 'mongodb';
import { MongoHelper } from './mongohelper';
const todoRoutes = express.Router();

const getCollection = () => {
    return MongoHelper.client.db('todo').collection('todos');
}

todoRoutes.get('/todo', (req: express.Request, res:express.Response, next: express.NextFunction) => {
   const collection = getCollection();
   collection.find({}).toArray((err, items) => {
      if(err) {
          res.status(500);
          res.end();
          console.error('Caught error', err);
      } else {
          items = items.map((item) => { return {id: item._id, description: item.description}});
          res.json(items);
      }
   });
});

todoRoutes.post('/todo', (req: express.Request, res:express.Response, next: express.NextFunction) => {
    console.info(req.body);
    res.end();
});

todoRoutes.put('/todo/:id', (req: express.Request, res:express.Response, next: express.NextFunction) => {
    console.info(req.body);
    console.info(req.params.id);
    res.end();
});

todoRoutes.delete('/todo/:id', (req: express.Request, res:express.Response, next: express.NextFunction) => {
    console.info(req.params.id);
    res.end();
});

export { todoRoutes }