import express from 'express';
import "dotenv/config";
import sequelize from './app/config/database.js';
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    sequelize.authenticate().then(() => {
        res.json({
            message: 'Database connected successfully!'
        })
    }).catch((error) => {
        console.log(error);
    })
});

app.listen(PORT, () => {
    console.log('App is running on port 3000');
});