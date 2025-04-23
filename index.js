const express = require('express');
const app = express();
const port = 8501; 

app.get('/', (req, res) => {
  res.send('Sucesso !');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
