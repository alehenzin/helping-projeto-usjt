//Recebendo a instancia express 
const express = require("express");
const app = express();
const sequelize = require("./database/database.js");
const entidade = require("./database/Entidade");
const bodyParser = require("body-parser");
const evento = require("./database/evento.js");

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
  app.get("/",(req, res) => {
    evento.findAll({ raw: true, order:[
        ['id','DESC'] // ASC = Crescente || DESC = Decrescente
    ]}).then(evento => {
        res.render("index",{
          evento: evento
        });
    });
});
  app.get('/CadastroEvento', function(req, res){
    res.render('CadastroEvento');
});

app.get('/CadastroEntidade', function(req, res){
    res.render('cadent');
});

app.get('/login', function(req, res){
    res.render('loginusuario');
});


//FILTROS POR ZONA

app.get("/eventobyzonaleste",(req ,res) => {
  const LESTE = 'LESTE'
  evento.findAll({
      where: {zona: LESTE}
  }).then(evento => {
      if(evento != undefined){ 
        res.render("filter",{
        evento: evento,
          });
      }else{ // Não encontrada
          res.redirect("/");
      }
  });
})

app.get("/eventobyzonasul",(req ,res) => {
  const ZONA = 'SUL'
  evento.findAll({
      where: {zona: ZONA}
  }).then(evento => {
      if(evento != undefined){ 
        res.render("filter",{
        evento: evento,
          });
      }else{ // Não encontrada
          res.redirect("/");
      }
  });
})

app.get("/eventobyzonanorte",(req ,res) => {
  const ZONA = 'NORTE'
  evento.findAll({
      where: {zona: ZONA}
  }).then(evento => {
      if(evento != undefined){ 
        res.render("filter",{
        evento: evento,
          });
      }else{ // Não encontrada
          res.redirect("/");
      }
  });
})

app.get("/eventobyzonaoeste",(req ,res) => {
  const ZONA = 'OESTE'
  evento.findAll({
      where: {zona: ZONA}
  }).then(evento => {
      if(evento != undefined){ 
        res.render("filter",{
        evento: evento,
          });
      }else{ // Não encontrada
          res.redirect("/");
      }
  });
})



app.get("/eventobyONG",(req ,res) => {
  const TIPO = 'ONG'
  evento.findAll({
      where: {tipoEntidade: TIPO}
  }).then(evento => {
      if(evento != undefined){ 
        res.render("filter",{
        evento: evento,
          });
      }else{ // Não encontrada
          res.redirect("/");
      }
  });
})

app.get("/eventobyparoquia",(req ,res) => {
  const TIPO = 'PAROQUIA'
  evento.findAll({
      where: {tipoEntidade: TIPO}
  }).then(evento => {
      if(evento != undefined){ 
        res.render("filter",{
        evento: evento,
          });
      }else{ // Não encontrada
          res.redirect("/");
      }
  });
})

app.get("/eventobyparoquia",(req ,res) => {
  const TIPO = 'PAROQUIA'
  evento.findAll({
      where: {tipoEntidade: TIPO}
  }).then(evento => {
      if(evento != undefined){ 

        res.render("filter",{
        evento: evento,

          });

      }else{ // Não encontrada
          res.redirect("/");
      }
  });
})


app.get("/eventobyPF",(req ,res) => {
  const TIPO = 'PF'
  evento.findAll({
      where: {tipoEntidade: TIPO}
  }).then(evento => {
      if(evento != undefined){ 

        res.render("filter",{
        evento: evento,

          });

      }else{ // Não encontrada
          res.redirect("/");
      }
  });
})








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

app.listen(3000, () => 
console.log('Servidor iniciado na porta 3000')
);