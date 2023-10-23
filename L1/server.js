const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/posts', async (req, res) => {
    try {
        const response = await fetch(`https://api.vk.com/method/wall.get?owner_id=-1&count=10&offset=0&access_token=d3yOJfHroaSCK1hlPpmM&v=5.131`);
        const data = await response.json();
        res.json(data.response.items);
    } catch (error) {
        res.status(500).json({ error: 'Ошибка при получении данных' });
    }
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
