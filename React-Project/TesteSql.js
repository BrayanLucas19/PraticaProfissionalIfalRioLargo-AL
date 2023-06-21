const mysql = require('mysql');
const con = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'aluno.ifal',
    password: 'aluno.ifal',
    database: 'Projeto',
});

con.connect((err) => {
    if (err) {
        console.log("Erro");
        return
    }
    console.log("Conexao feita!")
});

var login = 'Login 1'

//var sql = "SELECT senha FROM usuario WHERE login = " + mysql.escape(login);
var sql = "SELECT * FROM usuario"
con.query(sql, (err, rows) => {
    rows.forEach(row => {
        console.log(row.senha)
    });
    //console.log(rows)
});

con.end();