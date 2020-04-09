// usei o express pra criar e configurar meu servidor
const express = require('express');
const server = express();

const db = require("./db")

// configurar arquivos estaticos (css,scripts, imagens)
server.use(express.static("public"))

// habilitar o uso do req.body
server.use(express.urlencoded({extended: true}))

//configuração do nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views",{
    express: server,
    noCache: true,
})


// criei uma rota '/'
// e capturei o pedido do cliente para responder
server.get("/", function(req, res){

    db.all(`SELECT * FROM ideias`, function(err,rows){
        if(err) {
            console.log(err)
            return res.send("Erro no Banco de Dados")
        }
        
        const reversedIdeias = [...rows].reverse()
        let lastIdeias = []
        
        for (let idea of reversedIdeias){
            if(lastIdeias.length < 2){
                lastIdeias.push(idea)
            }
        }

        return res.render("index.html", { ideias: lastIdeias })
        })

    
})

server.get("/ideias", function(req, res){

    

    db.all(`SELECT * FROM ideias`, function(err,rows){
        if(err) {
            console.log(err)
            return res.send("Erro no Banco de Dados")
        }

        const reversedIdeias = [...rows].reverse()

        return res.render("ideias.html", {ideias: reversedIdeias})
    })
})

server.post("/", function(req, res) {
    const query = `INSERT INTO ideias(
        image,
        title,
        category,
        description,
        link
    ) VALUES (?,?,?,?,?);`

    const values = [
        req.body.image,
        req.body.title,
        req.body.category,
        req.body.description,
        req.body.link,

    ]
    db.run(query, values, function(err){
        if(err) {
            console.log(err)
            return res.send("Erro no Banco de Dados")
        }

        return res.redirect("/ideias")
    })
})

// liguei meu sergidor na porta 3000
server.listen(3000);