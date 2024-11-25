import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/", (req, res) => {
    const arr = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Smith" },
        { id: 3, name: "Bob Johnson" },
    ];

    res.send(arr);
});
const books = [
    { id: 1, title: "The Lord of the Rings" },
    { id: 2, title: "Harry Potter and the Sorcerer's Stone" },
    { id: 3, title: "Pride and Prejudice" },
    { id: 4, title: "To Kill a Mockingbird" },
    { id: 5, title: "1984" },
    { id: 6, title: "The Great Gatsby" },
    { id: 7, title: "The Catcher in the Rye" },
    { id: 8, title: "The Adventures of Huckleberry Finn" },
    { id: 9, title: "To Kill a Mockingbird" },
    { id: 10, title: "1984" },
    { id: 11, title: "The Great Gatsby" },
    { id: 12, title: "The Catcher in the Rye" },
    { id: 13, title: "The Adventures of Huckleberry Finn" },
];

// Get all books
app.get("/api/books", (req, res) => {
    res.send(books);
});

// Get a specific book
app.get("/api/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find((book) => book.id === id);
    if (book) {
        res.send(book);
    } else {
        res.status(404).json({ message: "Book not found" });
    }
});

// Update a book
app.put("/api/books/:id", (req, res) => {
    console.log(req.body);
    const id = parseInt(req.params.id);
    const bookIndex = books.findIndex((book) => book.id === id);

    if (bookIndex !== -1) {
        books[bookIndex] = req.body;

        res.send(books[bookIndex]);
    } else {
        res.status(404).json({ message: "Book not found" });
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
