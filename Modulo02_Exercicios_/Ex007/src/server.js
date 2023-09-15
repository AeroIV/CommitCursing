const express = require('express');
const { router } = require('./routes');
const {PrismaClient} = require('@prisma/client');

const app = express();

app.use(express.json());

app.use(router);

app.get('/', (req,res)=>{
    res.json({success:"asdasdsa"}) 
} )

app.listen(8080, () => {
    console.log('Rodando na porta 8080');
});


