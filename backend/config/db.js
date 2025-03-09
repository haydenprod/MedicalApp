const mysql = require('mysql2');

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: '',
    dbname:'bd_medicalapp'

});
conn.connect((err) => {
    if(err){
        console.error('Erreur de connection a la base de données : ',err);

    }else{
        console.log('Connecté a la base de données MySQL');

    }
});

module.exports = conn;