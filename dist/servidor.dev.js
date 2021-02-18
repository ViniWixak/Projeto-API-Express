"use strict";

var porta = 3003;

var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var bancoDeDados = require('./src/bancoDeDados');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.get('', function (req, res, next) {
  res.send(bancoDeDados.getProdutos());
});
app.get('/produtos', function (req, res, next) {
  res.send(bancoDeDados.getProdutos());
});
app.get('/produtos/:id', function (req, res, next) {
  res.send(bancoDeDados.getProduto(req.params.id));
});
app.post('/produtos', function (req, res, next) {
  var produto = bancoDeDados.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco
  });
  res.send(produto);
});
app["delete"]('/produtos/:id', function (req, res, next) {
  var produto = bancoDeDados.excluirProduto(req.params.id);
  res.send(produto);
});
app.listen(porta, function () {
  console.log("Servidor est\xE1 executando na porta ".concat(porta));
});