const sqlite3 = require ('sqlite3').verbose()
const db = new sqlite3.Database('./ws.db')

db.serialize(function() {

    //criar tabela
    
    db.run(`
        CREATE TABLE IF NOT EXISTS ideias(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            title TEXT,
            category TEXT,
            description TEXT,
            link TEXT
        );
    `)

    //inserir dados
    /*const query = `INSERT INTO ideias(
                    image,
                    title,
                    category,
                    description,
                    link
                ) VALUES (?,?,?,?,?);`

    const values = [
        "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        "Cursos de Programação",
        "Estudo",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam vel quae iusto eligendi similique omnis corporis perspiciatis a sunt molestiae magni obcaecati ipsa non fuga tempora, sed pariatur ab saepe?",
        "https://github.com/danielmpadua"
    ]
    db.run(query, values, function(err){
        if(err) return console.log(err)
        console.log(this)
    })*/

    //deletar

    /*db.run(`DELETE FROM ideias WHERE id=?`, [7], function(err){
        if(err) return console.log(err)

        console.log("DELETEI",this)
    })*/

    //consultar dados

    db.all(`SELECT * FROM ideias`, function(err,rows){
        if(err) return console.log(err)
        console.log(rows)
    })

    
})

module.exports = db