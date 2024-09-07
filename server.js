import express from 'express';
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('App is up and running!');
});

app.listen(PORT, () => {
    console.log('App is running on port 3000');
});