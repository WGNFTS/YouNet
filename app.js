// app.js - Backend usando Node.js e Express

const express = require("express");
const mongoose = require("mongoose");
const Video = require("./models/videoModel"); // Modelo MongoDB para vídeos

const app = express();
const PORT = process.env.PORT || 3000;

// Conectar ao banco de dados MongoDB
mongoose.connect("mongodb://localhost:27017/youwebdb", { useNewUrlParser: true, useUnifiedTopology: true });

// Configuração do Express
app.use(express.static("public")); // Servir arquivos estáticos
app.use(express.json()); // Parse do corpo da requisição como JSON

// Rotas
app.get("/videos", async (req, res) => {
    try {
        const videos = await Video.find(); // Obtém vídeos do banco de dados
        res.json(videos);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro interno do servidor");
    }
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
