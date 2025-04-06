const oracledb = require("oracledb");
const express = require("express");
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const app = express();
app.use(express.json());

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
const port = 3001;
app.use(cors());
let tasks;
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
// async function run() {
//   let connection;
//   try {
//     connection = await oracledb.getConnection({
//       user: "system",
//       password: "deep17raj",
//       connectString: "localhost:1521/xe",
//     });
//     // await connection.execute('DROP TABLE TODOLIST');
//     // await connection.execute('CREATE TABLE TODOLIST (TASK VARCHAR2(100))');
//     const result = await connection.execute("SELECT * FROM TODOLIST");
//     console.log(result);
//     tasks = result.rows;
//   } catch (err) {
//     console.error(err);
//   }

//   app.get("/", (req, res) => {
//     res.render("main.ejs", { tasks });
//   });
//   let ind = 1;
//   app.post("/", async (req, res) => {
//     let { task } = req.body;
//     ind++;
//     let q = "INSERT INTO TODOLIST (TASK) VALUES (:task)";
//     await connection.execute(q, [task], async (err, result) => {
//       if (err) {
//         console.error(err);
//         res.send("Error");
//       } else {
//         tasks.push(task);
//         console.log(result);
//         res.redirect("/");
//       }
//     });
//     await connection.execute("commit");
//   });
// }
// run();

async function run() {
  // let connection;
  // try {
//   connection = await oracledb.getConnection({}
  //     user: "system",
  //     password: "deep17raj",
  //     connectString: "localhost:1521/xe",
  //   });
  //   // await connection.execute('DROP TABLE TODOLIST');
  //   // await connection.execute('CREATE TABLE TODOLIST (TASK VARCHAR2(100))');
  //   // const result = await connection.execute("SELECT * FROM TODOLIST");
  //   // console.log(result);
  //   // tasks = result.rows;
  // } catch (err) {
  //   console.error(err);
  // }
  app.get("/",(req,res)=>{
    res.send("Hell No")
  })
  app.post("/signup", async (req, res) => {
    console.log("Received from frontend:", req.body);

    const { username, email, phone, password, role, religion } = req.body;
    const user_id = uuidv4();
  
    try {
      const connection = await oracledb.getConnection({
        user: "system",
        password: "deep17raj",
        connectString: "localhost:1521/xe",
      });
  
      const q = `
        INSERT INTO USERS (user_id, username, email, phone, password, role, religion)
        VALUES (:user_id, :username, :email, :phone, :password, :role, :religion)
      `;
      const bindParams = {
        user_id,
        username,
        email,
        phone,
        password,
        role,
        religion
      };
      console.log(bindParams)
      await connection.execute(q, bindParams, { autoCommit: true });
  
      res.status(200).send("User inserted successfully");
      await connection.close();
    } catch (err) {
      console.error(err);
      res.status(500).send("Database error");
    }
  });
  

  
}
run();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
