import express, {Application} from 'express';
import cors from 'cors';

const router=require('./route');

const app: Application = express();

app.use(cors());

// definiranje rute
app.use('/api/v1', router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>console.log(`App is listening on port: ${PORT}`));