let express = require('express');
let app = express();

app.get('/', (req, res) => {
    var html =
    `<html><body>
    <form action="/cliente" method="post">
    <label>Nome: <input type="text" name="nome"></label><br>
    <label>Idade:<input type="text" name="idade"></label><b>
    <button type="submit">Enviar</button>
    </form>
    </body></html>`
    res.send(html)
});

app.listen(3000, () => {
    console.log("Servidor ouvindo a porta: " + 3000)
});
