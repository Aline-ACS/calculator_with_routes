const express = require('express');

const server = express(); 

server.use(express.json());

//variáveis
let number1;
let number2;

server.get('/', (req,res) =>{
    return res.json({
        result: 'Bem vindo a calculadora'
    });
});

server.post('/numbers', (req, res) => {
    number1 = req.body.number1;
    number2 = req.body.number2;

    return res.json({
        result: 'dados recebidos com sucesso',
        number1,
        number2
    });
});

server.put('/numbers', (req,res) => {
    number1 = req.body.number1;
    number2 = req.body.number2;

    return res.json({
        result:'Números atualizados com sucesso'
    });
});


//SOMA

server.get('/soma', (req,res) => {
    
    const resultado = number1 + number2;

    return res.json({resultado});
});

//SUBTRAÇÃO

server.get('/subt', (req,res) => {
    
    const resultado = number1 - number2;

    return res.json({resultado});
});

//MULTIPLICAÇÃO

server.get('/mult', (req,res) => {
    
    const resultado = number1 * number2;

    return res.json({resultado});
});

//DIVISÃO

server.get('/div', (req,res) => {
    
    const resultado = number1 / number2;

    return res.json({resultado});
});





server.listen(5000);