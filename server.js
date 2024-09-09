import express from 'express';
import "dotenv/config";
//import sequelize from './app/config/database.js';
import routerCategories from './app/api/v1/categories/router.js';
const app = express();
const PORT = 3002;

app.use(express.json());
app.set('view engine', 'ejs');
//pattern
const v1 = '/api/v1';

app.get('/', (req, res) => {
    // sequelize.authenticate().then(() => {
    //     res.json({
    //         message: 'Database connected successfully!'
    //     })
    // }).catch((error) => {
    //     console.log(error);
    // })
});

app.use(v1, routerCategories);

app.listen(PORT, () => {
    console.log('App is running on port', PORT);
});