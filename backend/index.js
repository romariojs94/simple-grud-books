import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
require('dotenv').config();

const app = express();

const port = process.env.local.PORT || 8800;

const db = mysql.createConnection({
    host: process.env.local.DB_HOST,
    user: process.env.local.DB_USER,
    password: process.env.local.DB_PASSWORD,
    database: process.env.local.DB_DATABASE
  });

// Permite que o Express entenda requisições com corpo em JSON
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
});

app.get('/books', (req, res) => {
    const q = "SELECT * FROM books";
    db.query(q, (err, data) => {
        if (err) return res.json({ error: err });
         return res.json(data);
         ;  
    })
});

app.post('/books', (req, res) => {
    const q = "INSERT INTO books(`title`, `desc`, `price`, `cover`) VALUES (?)";
    const values = [
      req.body.title,
      req.body.desc,
      req.body.price,
      req.body.cover  
    ];
    
    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
});

app.delete('/books/:id', (req, res) => {
    const bookId = req.params.id;
    const q = "DELETE FROM books WHERE id = ?";
    
    db.query(q, [bookId], (err, data) => {
        if (err) return res.json(err);
        return res.json("Livro foi deletado com sucesso!");
    });
});

app.put('/books/:id', (req, res) => {
    const bookId = req.params.id;
    const q = "UPDATE books SET `title` = ?, `desc` = ?, price = ?, cover = ? WHERE id = ?";
    const values = [
        req.body.title,
        req.body.desc,
        req.body.price,
        req.body.cover,
    ];
    // spread operator
    db.query(q, [...values, bookId], (err, data) => {
        if (err) return res.json({
            "ouve um erro": err
        });
        return res.json(`Book foi atualizado com sucesso!`);
    });  
})
app.listen(port, () => {
    console.log('Backend server is running!');
});  