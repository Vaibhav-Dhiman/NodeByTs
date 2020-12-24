import * as express from 'express';
import { MongoHelper } from './mongohelper';
import * as mongodb from 'mongodb';

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
    const description = req.body['description'];
    const collection = getCollection();
    collection.insertOne({description: description});
    res.end();
});

todoRoutes.put('/todo/:id', (req: express.Request, res:express.Response, next: express.NextFunction) => {
    const description = req.body['description'];
    const id = req.params['id'];
    const collection = getCollection();
    collection.findOneAndUpdate({"_id": new mongodb.ObjectId(id)}, {description: description});
    res.end();
});

todoRoutes.delete('/todo/:id', (req: express.Request, res:express.Response, next: express.NextFunction) => {
   const id = req.params['id'];
   const collection = getCollection();
   collection.deleteOne({"_id": new mongodb.ObjectId(id)});
    res.end();
});

export { todoRoutes }