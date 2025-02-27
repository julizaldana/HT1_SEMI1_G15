const express = require('express');
const app = express();
const PORT = 5000;  // Puedes cambiarlo si lo deseas

// Endpoint de verificación
app.get('/check', (_, res) => {
    res.sendStatus(200);
});

// Endpoint de información
app.get('/info', (_, res) => {
    res.json({
        Instancia: "Maquina 1 - API 1",
        Curso: "Seminario de Sistemas 1 A",
        Grupo: "Grupo #15"
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`API1 corriendo en http://localhost:${PORT}`);
});
