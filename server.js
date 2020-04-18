const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const MongoURL = 'mongodb://127.0.0.1:27017/teste_todo';
const app = express();
let abacaxi ;

mongoClient.connect(MongoURL,(erro , sucess) => {
    if (erro) return  console.log(erro);

    abacaxi = sucess.db("teste_todo");

    app.listen(8001 , ()=>
        {
            console.log('oi dede')
        }
    );
});

app.get('/editar' ,(req, res )=>{
    abacaxi.collection('todo').updateMany({'nome':'dede' },{$set:{'nome':'rogin'}}
    ,(erro , sucesso) =>{
            if(erro) return  console.log(erro);
            res.send(sucesso);
        }
        );
});

app.get('/listar' ,(req, res )=>{
    abacaxi.collection('todo').find().toArray( (erro,sucesso) => {
        res.send(sucesso);
    });

});

app.get('/salvar' ,(req, res )=>{
    abacaxi.collection('todo').save({'nome':'jordao'}, (erro, sucess)=>{
        if(erro) return  console.log(erro);
        console.log(sucess);
    });
});

app.get('/delete' ,(req, res )=>{
    abacaxi.collection('todo').deleteOne({'nome':'jordao'}
        ,(erro , sucesso) =>{
            if(erro) return  console.log(erro);
            res.send(sucesso);
        }
    );
});





