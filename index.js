import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.get("/about", (req, res) => {
    res.send("This is about page!");
});
app.get("/contact", (req, res) => {
    res.send("This is about page!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
