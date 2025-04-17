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
  
  app.get("/data",async(req,res)=>{
    try {
      const connection = await oracledb.getConnection({
        user: "system",
        password: "deep17raj",
        connectString: "localhost:1521/xe",
      });
      
    const options = { outFormat: oracledb.OUT_FORMAT_OBJECT };
      const user = await connection.execute("select * from users", [], options);
      console.log(user.rows);
      const couple = await connection.execute("select * from couples", [], options);
      
      const event = await connection.execute("select * from Wedding_Events", [], options);
     
      const guest = await connection.execute("select * from guests", [], options);

      const vendor = await connection.execute("select * from vendor", [], options);
    
      const expense = await connection.execute("select * from Budget_Expenses", [], options);
      
      const ritual = await connection.execute("select * from Rituals_Traditions", [], options);
      res.json({
        userData: user.rows[0] ||{},
        coupleData: couple.rows[0] ||{},
        eventData: event.rows[0] ||{},
        guestData: guest.rows[0] ||{},
        vendorData: vendor.rows[0] ||{},
        expenseData: expense.rows[0] ||{},
        ritualData: ritual.rows[0] ||{},
      });
    } catch (err) {
      console.error(err);
      res.status(500).send("Database error");
    }
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
  app.post("/couple", async (req, res) => {
    console.log("Received from frontend:", req.body);

    const { couple_id, partner1_name, partner2_name, wedding_date,  religion,status } = req.body;
  
    try {
      const connection = await oracledb.getConnection({
        user: "system",
        password: "deep17raj",
        connectString: "localhost:1521/xe",
      });
  
      const q = `
        INSERT INTO COUPLES (couple_id, partner1_name, partner2_name, wedding_date, religion,status)
        VALUES (:couple_id, :partner1_name, :partner2_name, TO_DATE(:wedding_date, 'YYYY-MM-DD'), :religion,:status)
      `;
      const bindParams = {
        couple_id,
        partner1_name,
        partner2_name,
        wedding_date,
        religion,
        status
      };
      console.log(bindParams)
      await connection.execute(q, bindParams, { autoCommit: true });
  
      res.status(200).send("couple inserted successfully");
      await connection.close();
    } catch (err) {
      console.error(err);
      res.status(500).send("Database error");
    }
  });
  app.post("/event", async (req, res) => {
    const { event_id, couple_id, event_name, event_date, venue, description } = req.body;
  
    try {
      const connection = await oracledb.getConnection({
        user: "system",
        password: "deep17raj",
        connectString: "localhost:1521/xe",
      });
  
      const q = `
        INSERT INTO Wedding_Events (event_id, couple_id, event_name, event_date, venue, description)
        VALUES (:event_id, :couple_id, :event_name, TO_DATE(:event_date, 'YYYY-MM-DD'), :venue, :description)
      `;
  
      const bindParams = { event_id, couple_id, event_name, event_date, venue, description };
      await connection.execute(q, bindParams, { autoCommit: true });
  
      res.status(200).send("Event inserted successfully");
      await connection.close();
    } catch (err) {
      console.error(err);
      res.status(500).send("Database error");
    }
  });
  app.post("/guest", async (req, res) => {
    const { guest_id, couple_id, name, email, phone, invitation_sent, rsvp_status } = req.body;
  
    try {
      const connection = await oracledb.getConnection({
        user: "system",
        password: "deep17raj",
        connectString: "localhost:1521/xe",
      });
  
      const q = `
        INSERT INTO Guests (guest_id, couple_id, name, email, phone, invitation_sent, rsvp_status)
        VALUES (:guest_id, :couple_id, :name, :email, :phone, :invitation_sent, :rsvp_status)
      `;
  
      const bindParams = { guest_id, couple_id, name, email, phone, invitation_sent, rsvp_status };
      await connection.execute(q, bindParams, { autoCommit: true });
  
      res.status(200).send("Guest inserted successfully");
      await connection.close();
    } catch (err) {
      console.error(err);
      res.status(500).send("Database error");
    }
  });
  app.post("/vendor", async (req, res) => {
    const { vendor_id, name, service_type, phone, email, religion, price, status } = req.body;
  
    try {
      const connection = await oracledb.getConnection({
        user: "system",
        password: "deep17raj",
        connectString: "localhost:1521/xe",
      });
  
      const q = `
        INSERT INTO Vendor (vendor_id, name, service_type, phone, email, religion, price, status)
        VALUES (:vendor_id, :name, :service_type, :phone, :email, :religion, :price, :status)
      `;
  
      const bindParams = { vendor_id, name, service_type, phone, email, religion, price, status };
      await connection.execute(q, bindParams, { autoCommit: true });
  
      res.status(200).send("Vendor inserted successfully");
      await connection.close();
    } catch (err) {
      console.error(err);
      res.status(500).send("Database error");
    }
  });
  
  app.post("/expense", async (req, res) => {
    const { expense_id, couple_id, category, amount, paid_by, dates } = req.body;
  
    try {
      const connection = await oracledb.getConnection({
        user: "system",
        password: "deep17raj",
        connectString: "localhost:1521/xe",
      });
  
      const q = `
        INSERT INTO Budget_Expenses (expense_id, couple_id, category, amount, paid_by, dates)
        VALUES (:expense_id, :couple_id, :category, :amount, :paid_by, TO_DATE(:dates, 'YYYY-MM-DD'))
      `;
  
      const bindParams = { expense_id, couple_id, category, amount, paid_by, dates };
      await connection.execute(q, bindParams, { autoCommit: true });
  
      res.status(200).send("Expense inserted successfully");
      await connection.close();
    } catch (err) {
      console.error(err);
      res.status(500).send("Database error");
    }
  });
  app.post("/ritual", async (req, res) => {
    const { ritual_id, religion, ritual_name, description, importance_level } = req.body;
  
    try {
      const connection = await oracledb.getConnection({
        user: "system",
        password: "deep17raj",
        connectString: "localhost:1521/xe",
      });
  
      const q = `
        INSERT INTO Rituals_Traditions (ritual_id, religion, ritual_name, description, importance_level)
        VALUES (:ritual_id, :religion, :ritual_name, :description, :importance_level)
      `;
  
      const bindParams = { ritual_id, religion, ritual_name, description, importance_level };
      await connection.execute(q, bindParams, { autoCommit: true });
  
      res.status(200).send("Ritual inserted successfully");
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
