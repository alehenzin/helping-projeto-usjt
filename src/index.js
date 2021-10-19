//Recebendo a instancia express 
const express = require("express");
const app = express();
const sequelize = require("./database/database.js");
const entidade = require("./database/Entidade");
const bodyParser = require("body-parser");

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'));

sequelize
  .authenticate()
  .then(() => {
    console.log("Conectado com sucesso!")
  }).catch((msgErro) => {
    console.log("Erro ao conectar com DB!", error)
  })

  app.get('/CadastroEvento', function(req, res){
    res.render('CadastroEvento');
});

app.get('/CadastroEntidade', function(req, res){
    res.render('cadent');
});

app.get('/login', function(req, res){
    res.render('loginusuario');
});

app.post("/salvarentidade",(req, res) => {

    var nome = req.body.nome;
    var email = req.body.email;
    var senha = req.body.senha;
    var endec = req.body.endereco;
    var tel = req.body.telefone;
    var zona = req.body.Zona;
    var tipo = req.body.tipo;


    entidade.create({
        nome: nome,
        email: email,
        senha: senha,
        endec: endec,
        tel: tel,
        zona: zona,
        tipo: tipo,

    }).then(() => {
        res.redirect("/");
    });
});

/*app.post("/salvarevento",(req, res) => {

  var nome = req.body.nome;
  var dt_inicio = req.body.dt_inicio;
  var dt_final = req.body.dt_final;
  var desc = req.body.desc;


  evento.create({
      nome: nome,
      dt_inicio: dt_inicio,
      dt_final: dt_final,
      desc: desc,

  }).then(() => {
      res.redirect("/");
  });
});*/

app.listen(3000, () => 
console.log('Servidor iniciado na porta 3000')
);