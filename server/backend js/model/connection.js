import mysql from "mysql";

let conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database : "JPR"
});

const con = conn.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});


export default conn;

// app.listen(3000,()=>console.log("at 3000"));

