const express = require('express');
const app = express();

// app.get('/',(req,res) => {
//     res.send('hola')
// })

app.set('view engine', 'ejs');



app.listen(5000, () => console.log('server corriendo en localhost:5000'));