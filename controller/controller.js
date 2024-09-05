const express = require('express');
const Book = require('../model/model'); 
const User = require('../model/userModel'); 
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const authSchema = require('../auth/validation'); 
const { log } = require('console');

// Generate a JWT token for the user
const generateToken = (user) => {
    return jwt.sign({ id: user._id, userName: user.userName }, process.env.JWT_SECRET, {
        expiresIn: '1h' // expires in 3 hours
    });
};

let controller = {
    userRegistration: async (req, res) => {
        try {
            // validate the re.body with joi 
            const { error, value } = authSchema.validate(req.body);
            if (error) {
                return res.status(400).json({ error: error.message });
            }
            let { userName, password } = value;
            const checkUser = await User.findOne({ userName });
            if (checkUser) {
                return res.status(400).json({ message: 'user already exists in database' });
            }

            // generate hash the password
            const hash = await bcryptjs.genSalt(4);
            const hashedPassword = await bcryptjs.hash(password, hash);

            // save the user
            const user = new User({ userName, password: hashedPassword });
            await user.save();

            return res.status(201).json({ message: 'User created successfully...' });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: err.message });
        }
    },

    login: async (req, res) => {
        try {
            let { userName, password } = req.body
            const user = await User.findOne({ userName });  // check usename is exist or not

            //check or compare the password 
            if (!user || !(await bcryptjs.compare(password, user.password))) {
                return res.status(401).json({ message: 'invalid user Name or password' });
            }
            // Generate a JWT token for the authenticated user
            const token = generateToken(user);
            return res.status(200).json({ message: 'login successfully', token });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: error.message });
        }
    },

    addBooks: async (req, res) => {
        try {
            const { title, author, year, genre } = req.body;
            if (!title) return res.status(404).json({ message: 'Product required' });
            if (!author) return res.status(404).json({ message: 'author is required' });
            if (!year) return res.status(404).json({ message: 'year is required' });
            if (!genre) return res.status(404).json({ message: 'genre is required' });

            const newBook = new Book({ title, author, year, genre });
            await newBook.save();

            return res.status(200).json({ message: 'book insert' });
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    getAllBooks: async (req, res) => {
        try {
            const books = await Book.find();

            return res.status(200).json({ message: 'get all books', books });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    getBook: async (req, res) => {
        try {
            const id = req.params.id
            const book = await Book.findById(id);
            if (!book) {
                return res.status(404).json({ message: 'Book not found' });
            }
            return res.status(200).json({ message: 'get  book by id', book });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    updateBook: async (req, res) => {
        try {
            id = req.params.id
            const updateBook = await Book.findByIdAndUpdate(id, req.body, { new: true });
            if (!updateBook) {
                return res.status(404).json({ message: 'book not found' });
            }
            return res.status(200).json({ message: 'update book by id', updateBook });

        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    deleteBook: async (req, res) => {
        try {
            const book = await Book.findByIdAndDelete(req.params.id);
            if (!book) {
                return res.status(404).json({ message: 'Book not found' });
            }
            res.json({ message: 'Book deleted' });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

};

module.exports = controller;
