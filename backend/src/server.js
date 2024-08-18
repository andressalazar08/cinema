const express = require('express');
const cors =  require('cors');
const dotenv =  require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{
    res.json({
        message:'API cinema project udea'
    })
});

const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`)
})