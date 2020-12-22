import express from 'express';
import controller from '../controllers/book';

const router = express.Router();

//http://localhost:1337/api/books/get/books -> get all books
// http://localhost:1337/api/books/get/book/5fe1de65abe1532f840121f1 -> get by id
// localhost:1337/api/books/create/book -> create book
router.post('/create/book', controller.createBook);
router.get('/get/books', controller.getAllBooks);
router.get('/get/book/:id', controller.getBook);

export = router;
