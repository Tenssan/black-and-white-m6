const express = require('express');
const path = require('path');
const Jimp = require('jimp');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/process', async (req, res) => {
    const imageUrl = req.body.imageUrl;
    
    try {
        const image = await Jimp.read(imageUrl);
        image.resize(350, Jimp.AUTO).greyscale();
        const imageName = `${uuidv4()}.jpg`;
        await image.writeAsync(path.join(__dirname, 'processed_images', imageName));
        res.send(`Imagen procesada: <img src="/processed_images/${imageName}" />`);
    } catch (error) {
        res.status(500).send('Error procesando la imagen.');
    }
});

app.use('/processed_images', express.static(path.join(__dirname, 'processed_images')));

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});