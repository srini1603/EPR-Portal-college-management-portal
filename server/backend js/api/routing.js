import express from "express";
import con from '../model/connection.js'

const  router = express.Router();

router.get('/',(req,res)=>{
    res.send('srini');
});

router.get('/:id', (req, res) => {
    con.query('SELECT name,email,rollno,gender FROM Studentdetail WHERE rollno=?', [req.params.id], (err, rows, fields) => { 
        if (!err){
            return res.send(rows);
        }
        else
            console.log(err);
    })
});


export default router;