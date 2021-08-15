import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

import postRoutes from './routes/posts.js';

const app = express();



app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use(cors());   

app.use('/posts', postRoutes)

const CONNECTIO_URL = 'mongodb+srv://mernproject:mernproject@cluster0.5fcbk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 7000;

mongoose.connect(CONNECTIO_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, ()=> console.log('Server running on port: ${PORT}')))
    .catch((error)=>console.log(error.message));

mongoose.set('useFindAndModify', false);   