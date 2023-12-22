const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'thtjdgk0901!',
  database : 'todolistSystem',
});

app.post("/create", (req, res) => {
  const { text, completed } = req.body;
  
  db.query(
    "INSERT INTO TODOLISTSYSTEM.TODOS (TEXT, COMPLETED) VALUES (?,?)",
    [text, completed],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Inserted values successfully!");
      }
    }
  );
});

app.get("/todos", (req, res) => {
  console.log('GET /todos 요청 도착')
  db.query("SELECT * FROM TODOLISTSYSTEM.TODOS", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/Quotes", (req, res) => {
  console.log('GET /Quotes 요청 도착')
  db.query("SELECT * FROM TODOLISTSYSTEM.Quotes", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/todos", (req, res) => {
  const id = req.body.id;
  const text = req.body.text;
  const completed = req.body.completed;


  db.query(
    "UPDATE TODOLISTSYSTEM.TODOS SET TEXT = ?, COMPLETED = ? WHERE ID = ?;",
    [text, completed, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(`Updated values successfully!`);
      }
    }
  );
});

app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  db.query(
    "DELETE FROM TODOLISTSYSTEM.TODOS WHERE ID = ?",
    [id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(`Deleted values successfully!`);
      }
    }
  );
});

app.listen(3001, () => {
  console.log("Your server is running on port 3001");
});