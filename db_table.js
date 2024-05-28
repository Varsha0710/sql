var mysql=require('mysql2');

var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"nodedb"
});

con.connect((err)=>{
    if (err) throw err;
    console.log("connected");
    con.query("CREATE TABLE employees (name VARCHAR(255), designation VARCHAR(255))",function(){
        console.log("Table Created");
    });
    
    con.query("ALTER TABLE employees ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY", function (err, result) {
    if (err) throw err;
    console.log("Table altered");
    });

    var sql="INSERT INTO employees (name, designation) VALUES ?";
    var values=[
        ["peter",'hr'],
        ["johnson","je"],
        ["kannan","fm"],
        ["deena","manager"],
        ["harini","tl"]
    ];
    con.query(sql,[values],(err)=>{
        if(err) throw err;
        console.log("employees added");
    });

    con.query("SELECT * FROM employees", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });

    con.query("SELECT name FROM employees", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });

    con.query("SELECT * FROM employees WHERE designation = 'tl'", function (err, result) {
        if (err) throw err;
        console.log(result);
    });

    con.query("SELECT * FROM employees WHERE designation LIKE 'm%'", function (err, result) {
        if (err) throw err;
        console.log(result);
    });

    con.query("SELECT * FROM employees ORDER BY name", function (err, result) {
        if (err) throw err;
        console.log(result);
    });

    con.query("SELECT * FROM employees ORDER BY designation DESC", function (err, result) {
        if (err) throw err;
        console.log(result);
    });

    con.query("DELETE FROM employees WHERE designation='je'", function (err, result) {
        if (err) throw err;
        console.log("deleted");
    });

    con.query("SELECT * FROM employees", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
    
    con.query("UPDATE employees SET designation='developer' WHERE designation='fm'" , function (err, result) {
        if (err) throw err;
        console.log(deleted);
    });

    con.query("SELECT * FROM employees", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });

    con.query("SELECT * FROM employees LIMIT 2", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});   
