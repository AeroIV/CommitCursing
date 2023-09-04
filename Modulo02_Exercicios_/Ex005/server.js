const express = require('express');
const app = express();

app.use(express.json());

const port = 8080;

const users = [];

app.get('/', (req, res) => {
    res.json({users: users});
});

app.post('/users', (req, res) => {
    const age = req.body;
    users.push(age);
    if (age < 18){
        res.send("menor de idade");
    } else if (age >= 18){
        res.send("maior de idade");
    }
    
});

app.listen(port, () => {
    console.log(`Rodando na porta... ${port}`);
});

