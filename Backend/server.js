import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import adminRouter from './routes/adminRoutes.js';

const app = express();

await connectDB();

// middlewares
app.use(cors());
app.use(express.json());

app.get('/', (req,res) => {
    res.send("hello Express");
});
// admin router
app.use('/api/admin',adminRouter);

const port = process.env.PORT || 4000;

app.listen(port, () =>{ 
    console.log(`server is running on http://localhost:${port}`); 
});

export default app;