const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//ROUTES//

//CREATE A TODO

// app.post("/todos", async (req, res) => {
//     try {
//       const { description } = req.body;
//       const newTodo = await pool.query(
//         "INSERT INTO todo (description) VALUES($1) RETURNING *",
//         [description]
//       );
  
//       res.json(newTodo.rows[0]);
//     } catch (err) {
//       console.error(err.message);
//     }
//   });

app.post("/todos", async (req, res) => {
        try {
          console.log(req.body);
        }catch (err) {
                 console.error(err.message);
                 }
      });
  
//GET ALL TODOS

//GET A TODO

//UPDATE A TODO

//DELETE A TODO;

app.listen(5000, () => {
    console.log("Server has started on port 5000")
})