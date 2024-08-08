const app = require('./app');
const cors = require('cors');
const PORT = process.env.PORT || 3000;

//para la prueba se desea mostrar las imagenes descargadas desde la web
//por politica CORS no permite, por eso se agregar lo siguiente:
// Habilitar CORS manualmente
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});