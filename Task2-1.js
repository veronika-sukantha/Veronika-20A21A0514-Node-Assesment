const mysql = require('mysql');


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysql123',
});


connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL server');

  
  createDatabase('NodeTasks');
});


function createDatabase(databaseName) {
  const createDbQuery = `CREATE DATABASE IF NOT EXISTS ${databaseName}`;

  connection.query(createDbQuery, (err, result) => {
    if (err) throw err;
    console.log(`Database ${databaseName} created`);

   
    connection.changeUser({ database: databaseName }, (err) => {
      if (err) throw err;
      console.log(`Database ${databaseName} selected`);
      createTable(); 
    });
  });
}


function createTable() {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS employees (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255),
      department VARCHAR(100),
      salary DECIMAL(10, 2)
    )
  `;

  connection.query(createTableQuery, (err, result) => {
    if (err) throw err;
    console.log('Table employees created');

    
  });
}

module.exports = {
    createDatabase,
    createTable,
  };