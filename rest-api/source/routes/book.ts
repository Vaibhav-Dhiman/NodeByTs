import express from 'express';
import controller from '../controllers/book';

const router = express.Router();

//http://localhost:1337/api/books/get/books -> get
// localhost:1337/api/books/create/book -> post
router.post('/create/book', controller.createBook);
router.get('/get/books', controller.getAllBooks);

export = router;
