const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const { response } = require("express");
app.use(bodyParser.urlencoded({extended:true}));

app.engine("ejs",require("ejs").__express);
app.set("view engine","ejs");

const DATABASE = "shop.db";
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(DATABASE);

app.listen(3000,function(){
    console.log("listining 3000");
});

app.get("/produktliste",function(req,res){
    db.all(
        `select * from produkte`,
        function(err,rows){
            res.render("produktliste",{"produkte":rows});
        }
    );
});

//Formular zum hinzufühgen eines Produktes
app.get("/create",function(req,res){
    res.sendFile(__dirname + "/views/create.html");
});
//Post-Request oncreat fügt Produkt hinzu
app.post("/oncreate",function(req,res){
    const param_name = req.body.produktname;
    const param_preis = req.body.produktpreis;

    db.run(
        `insert into produkte(name,preis) values("${param_name}",${param_preis})`,
        function(err){
            res.redirect("/produktliste");
        }
    );
})