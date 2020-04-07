// usei o express pra criar e configurar meu servidor
const express = require('express');
const server = express();

const ideias = [
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        titles:"Cursos de Programação",
        category: "Estudo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam vel quae iusto eligendi similique omnis corporis perspiciatis a sunt molestiae magni obcaecati ipsa non fuga tempora, sed pariatur ab saepe?",
        url: "https://github.com/danielmpadua"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729069.svg",
        titles:"Exercícios",
        category: "Saúde",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam vel quae iusto eligendi similique omnis corporis perspiciatis a sunt molestiae magni obcaecati ipsa non fuga tempora, sed pariatur ab saepe?",
        url: "https://github.com/danielmpadua"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
        titles:"Meditação",
        category: "Mentalidade",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam vel quae iusto eligendi similique omnis corporis perspiciatis a sunt molestiae magni obcaecati ipsa non fuga tempora, sed pariatur ab saepe?",
        url: "https://github.com/danielmpadua"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729038.svg",
        titles:"Pintura",
        category: "Criatividade",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam vel quae iusto eligendi similique omnis corporis perspiciatis a sunt molestiae magni obcaecati ipsa non fuga tempora, sed pariatur ab saepe?",
        url: "https://github.com/danielmpadua"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729032.svg",
        titles:"Karaoke",
        category: "Diversão em familia",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam vel quae iusto eligendi similique omnis corporis perspiciatis a sunt molestiae magni obcaecati ipsa non fuga tempora, sed pariatur ab saepe?",
        url: "https://github.com/danielmpadua"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729048.svg",
        titles:"Recortes",
        category: "Criatividade",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam vel quae iusto eligendi similique omnis corporis perspiciatis a sunt molestiae magni obcaecati ipsa non fuga tempora, sed pariatur ab saepe?",
        url: "https://github.com/danielmpadua"
    },
]

// configurar arquivos estaticos (css,scripts, imagens)
server.use(express.static("public"))

//configuração do nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views",{
    express: server,
    noCache: true,
})

// criei uma rota '/'
// e capturei o pedido do cliente para responder
server.get("/", function(req, res){

    const reversedIdeias = [...ideias].reverse()
    let lastIdeias = []
    
    for (let idea of reversedIdeias){
        if(lastIdeias.length < 2){
            lastIdeias.push(idea)
        }
    }

    return res.render("index.html", { ideias: lastIdeias })
})

server.get("/ideias", function(req, res){
    const reversedIdeias = [...ideias].reverse()

    return res.render("ideias.html", {ideias: reversedIdeias})
})

// liguei meu sergidor na porta 3000
server.listen(3000);