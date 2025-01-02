const express = require('express');
const app = express();

app.get('/signup',(req,res)=>{
    const {userName,email,password, date_of_birth} = req.body;

    return res.send('hello!');

})

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Your server is running on port http://localhost:${PORT}`);
})