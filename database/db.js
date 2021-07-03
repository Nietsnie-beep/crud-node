const mysql = require('mysql')

const conexion = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'crud'
});

conexion.connect((error) =>{
    if(error){
        console.error('el error de conexion es: '+error);
        return
    }
    console.log('Conectado a la bd');
} )

module.exports = conexion