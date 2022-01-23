const config = require("../../config.js");
const bcrypth = require("bcryptjs");
const fs = require("fs");
const uid = require(config.LOGIC + "/uid.js");
const authenticathor = require("./authenticathor.js");


const auth = (req , res) => {
    if(!req.body) res.json({status : false , message : ["Error..."]});;
    if(!req.body.id) res.json({status : false , message : ["Error..."]});;
    if(!req.body.password) res.json({status : false , message : ["Error..."]});;
    
    let id = req.body.id;
    let password = req.body.password;
    console.log(req.body);
    if(!fs.existsSync(config.DB + "/accounts/" + id + ".js")){
        const account = {
            id : id,
            uid : uid.alphanum(4),
            user : "user_" + uid.num(4),
            password : "",
            nexxus_coin : config.START_NEXXUS_COIN,
            modules : [],
            own_modules : []
        };
        
        if(password.length < 6) {
        	   res.json({status : false, message : ["Su contraseña debe ser mayor de 6 digitos."]});
        	   return;
        }
        
        account.password = password;
        
        
        fs.writeFile(config.DB + "/accounts/" + id + ".js" , JSON.stringify(account) , "utf-8" , (err)=>{
        	   res.json({status : true , message : ["Cuenta registrada en el NEXXUS para acceder inserte nuevamente su cuenta."]});
        });
        return;
    }else{
    	   fs.readFile(config.DB + "/accounts/" + id + ".js" , "utf-8" , (err , data)=>{
    	   	    if(err) {
    	   	    	   res.json({status : false , message : ["Ocurrio un error al leer sus datos :" , "" + err]});
    	   	    	   return;
    	   	    }else{
    	   	    	   data = JSON.parse(data);
    	   	    	   if(password != data.password){
    	   	    	   	    res.json({status : false , message : ["Contraseña incorrecta! Intente de nuevo..."]});
    	   	    	   	    return;
    	   	    	   }
    	   	    	   res.json({status : true , message : ["Bievenido al Nexxus '" + data.user + "'" , 
    	   	    	   	"","ID: " + data.uid , "Password: " + data.password.replace(/./g , "*") ,
    	   	    	   	"Nexxus Coin: " + data.nexxus_coin] , token : authenticator.generate(id)});
    	   	        return;
    	   	    }
    	   	});
    }
    
}

module.exports = auth;
