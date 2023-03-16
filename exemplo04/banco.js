const sqlite3 = require("sqlite3");
const fs = require("fs");
const filepath = "./loja.db";

function criarBanco() {

  if (fs.existsSync(filepath)) {
        return new sqlite3.Database(filepath);      
  } 
  else 
  {
    const banco = new sqlite3.Database(filepath, (error) => {
    if (error) {
        return console.error(error.message);
    } });
    console.log("Conexão com Sqlite Ok!!");
    criarTabela(banco);
  }
}

function criarTabela(banco) {
    banco.exec(`
    CREATE TABLE produtos
    (
      ID INTEGER PRIMARY KEY AUTOINCREMENT,
      nome   VARCHAR(50) NOT NULL,
      quantidade  INTEGER NOT NULL,
      valor DOUBLE NOT NULL
    );
  `);
  }

module.exports = criarBanco();
