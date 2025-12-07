import express from 'express';

const app = express();

app.get('/', (req,res) => {
    res.send("hello Express");
});

const port = 3000;

app.listen(port, () =>{ 
    console.log(`server is running on http://localhost:${port}`); 
});
