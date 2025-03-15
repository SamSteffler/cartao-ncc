const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/api/token', (req, res) => {
    console.log('Dados recebidos:', req.body);  // Exibe no console o corpo da requisição
    res.status(200).send('OK');  // Retorna status 200 OK
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});