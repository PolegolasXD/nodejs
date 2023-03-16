let express = require('express');
let app = express();

app.get('/', (req, res) => {
    res.send('primeiro projeto NodeJs!');
});

app.get('/sobre', (req, res) => {
    res.send("Sistema desenvolvido por: ciclano");
});

app.use((req, res, next) => {
    res.status(404).send('Erro 404! Página não encontrada');
});

app.listen(3000, () => {
    console.log('Servidor uvindo a porta 3000!');
});