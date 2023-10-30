import express from 'express';
import { fetchData } from './helpers/api'
import rooms from './routes/rooms';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json())

app.use('/room', rooms)

app.listen(5000, () => {
    console.log('Listening on port 5000')
})