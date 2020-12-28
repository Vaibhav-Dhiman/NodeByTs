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
      if(items.length == 0)
      {
        res.status(200).json({ message: 'Add items' });
      }
      if(err) {
          res.status(500);
          res.end();
         // console.error('Caught error', err);
      } else {
          items = items.map((item) => { return {id: item._id, description: item.description}});
          res.json(items);
      }
   });
});

todoRoutes.post('/todo', (req: express.Request, res:express.Response, next: express.NextFunction) => {
    res.setHeader('Content-Type', 'text/html');
    const description = req.body['description'];
    const collection = getCollection();
    collection.findOneAndUpdate({description: description}, {$set: {description: description}}, 
        {upsert: true}, function(err,doc) {
        if(doc.value === null || doc.value === '') {
            {   return res.status(404).json({ error: "No Profile Found" });
        }
    }
      //else res.status(200).json({ message: 'Record Already Exits' });
      //  if (err) { throw err; }
      }); 
    res.end();
    next();
});

todoRoutes.put('/todo/:id', (req: express.Request, res:express.Response, next: express.NextFunction) => {
    const description = req.body['description'];
    const id = req.params['id'];
    const collection = getCollection();
    collection.findOneAndUpdate({_id: id}, {$set: {description: description}}, {upsert: true}, function(err,doc) {
        if (err) { throw err; }
        else { res.status(200).json({ message: 'Updated Sucessfully' }); }
      }); 
    res.end();
});

todoRoutes.delete('/todo/:id', (req: express.Request, res:express.Response, next: express.NextFunction) => {
   const id = req.params['id'];
   const collection = getCollection();
   collection.deleteOne({"_id": new mongodb.ObjectId(id)});
   res.status(200).json({ message: 'Deleted Sucessfully' });
    res.end();
});

export { todoRoutes }