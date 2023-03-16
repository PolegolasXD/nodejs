const banco = require("./banco.js");

function inserirRegistro() {
    const [nome, quantidade, valor] = process.argv.slice(2);
    banco.run(
        'INSERT INTO produtos (nome, quantidade, valor) VALUES (?,?,?)',
        [nome, quantidade, valor],
        function(error) {
            if(error) {
                console.error(error.message);
            }
        console.log("Dados inseridos com sucesso");
        }  
    )
}

inserirRegistro();