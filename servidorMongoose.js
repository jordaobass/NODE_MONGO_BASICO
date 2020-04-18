const express = require('express');
var mongoose  = require('mongoose');

const UsuarioModel = require('./model/usuario');
const MongoURL = 'mongodb://127.0.0.1:27017/teste_todo';

mongoose.connect(MongoURL, {
    useNewUrlParser:true
});

var db =mongoose.connection;

const mongoClient = require('mongodb').MongoClient;

const app = express();


mongoClient.connect(MongoURL,(erro , sucess) => {
    if (erro) return  console.log(erro);

    app.listen(8001 , ()=>
        {
            console.log('oi dede')
        }
    );
});

app.get('/editarUsuario', async (req, res )=>{
    var lista = await  UsuarioModel.findOneAndUpdate({nome: 'jordao'},{$set:{'nome':'Deleon'}});
    console.log(lista);
    res.send(lista);
});

app.get('/listarUsuario' ,async (req, res )=>{

    var lista = await  UsuarioModel.find({});
    console.log(lista);
    res.send(lista);
});

app.get('/salvarUsuario' ,(req, res )=>{
    let usuario ={ nome : 'jordao', senha: '123456' };
    let repositorio =new UsuarioModel(usuario).save();
    res.send(usuario);
});

app.get('/deleteUsuario' , async (req, res )=>{
    var lista = await  UsuarioModel.findOneAndDelete({nome: 'jordao'});
    console.log(lista);
    res.send(lista);
});

app.get('/AdicionarTarefa', async (req, res )=>{
    var lista = await  UsuarioModel.findOneAndUpdate({nome: 'jordao'},{$set:{listaTodo:[{nome:'tarefa1' ,descricao:'texto' }]}});
    console.log(lista);
    res.send(lista);
});



