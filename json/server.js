const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Servir archivos estáticos como imágenes
app.use('/images', express.static(path.join(__dirname, 'images')));

// Ruta para el archivo JSON
app.get('/api/images', (req, res) => {
  res.sendFile(path.join(__dirname, 'images.json'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
