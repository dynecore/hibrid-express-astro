// server.js
import express from 'express';
import { handler as astroHandler } from './dist/server/entry.mjs';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware de Express (por ejemplo, manejo de JSON, autenticación, etc.)
app.use(express.json());

// Rutas específicas de Express
app.get('/api', (req, res) => {
  res.json({ message: 'API funcionando con Express' });
});

// Usar Astro como middleware
app.use(astroHandler);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});
