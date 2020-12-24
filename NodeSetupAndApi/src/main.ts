import { app } from './app';
import * as http from 'http';
import { MongoHelper } from './mongohelper';

const PORT = 8080;
const server  = http.createServer(app);
server.listen(PORT);
server.on('listening', async () => {
    console.info(`Listening om port ${PORT}`);
    try {
        await MongoHelper.connect('mongodb://127.0.0.1:27017');
        console.info('Connected to Mongo');
    } catch (err) {
        console.error(err);
    }
});

