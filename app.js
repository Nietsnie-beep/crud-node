const express = require("express");
const app = express();

// routes
// app.get("/",(req,res)=>{
//     res.send("hello");
// });

app.use('/', require('./router'))

// server started

const port =process.env.PORT || 5000;
app.listen(port,()=>{
    console.log("server started at port 5000");
});