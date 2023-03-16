var express = require("express")
var app = express()
var banco = require("./banco.js")
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/listar", (req, res, next) => {
    var sql = "select * from produtos"
    var dados = []
    banco.all(sql, dados, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "dados":rows
        })
      });
});



app.post("/cadastrar", (req, res, next) => {
    
    var campos = {
        nome: req.body.nome,
        quantidade: req.body.quantidade,
        valor : req.body.valor
    }
    var sql ='INSERT INTO produtos (nome, quantidade, valor) VALUES (?,?,?)'
    var dados =[campos.nome, campos.quantidade, campos.valor]
    banco.run(sql, dados, function (err, result) {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "dados": campos,
            "id" : this.lastID
        })
    });
})


app.get("/", (req, res, next) => {
    res.json({"message":"API Ok"})
});

app.listen(3000,() => {
    console.log("Servidor ouvindo a porta 3000")
})
