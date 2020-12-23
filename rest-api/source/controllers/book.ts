import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import IBook from '../interfaces/book';
import Book from '../models/book';

const createBook = (req: Request, res: Response, next: NextFunction) => {
    let { author, title } = req.body;

    const book = new Book({
        _id: new mongoose.Types.ObjectId(),
        author,
        title
    });

    return book
        .save()
        .then((result) => {
            return res.status(201).json({
                book: result
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

const getAllBooks = (req: Request, res: Response, next: NextFunction) => {
    Book.find()
        .exec()
        .then((books) => {
            return res.status(200).json({
                books: books,
                count: books.length
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

const getBook = (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    Book.find({ _id: id })
        .exec()
        .then((books) => {
            return res.status(200).json({
                books: books
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

const deleteBook = (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    Book.find({ _id: id })
        .exec()
        .then((books) => {
            return res.status(200).json({
                books: books
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

const updateBook = (req: Request, res: Response, next: NextFunction) => {
    // to be done
    let { author, title } = req.body;
    const id = req.params.id;

    Book.findByIdAndUpdate({ _id: id }, { author, title })
        .exec()
        .then((book) => {
            if (book) {
                Book.find({ _id: id })
                    .exec()
                    .then((book) => {
                        return res.status(200).json({
                            book: book,
                            message: 'Updated Sucessfully'
                        });
                    });
            }
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

export default { createBook, getAllBooks, getBook, updateBook, deleteBook };
