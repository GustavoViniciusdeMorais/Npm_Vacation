import express from 'express';
import http from 'http';

const app = express();
const PORT = 8080;
const httpServer = http.createServer(app);

// Show site page
app.use(express.static(__dirname + '/../public/site/'));

httpServer.listen(PORT, function(){
    console.log(`Server running at port ${PORT}`);
});

// Test Route
app.get('/', (req, res) => {
    res.send('Gustavo');
});
