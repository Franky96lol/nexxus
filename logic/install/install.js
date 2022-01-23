const config = require("../../config.js");
const fs = require("fs");
const authenticathor = require(config.LOGIC + "/auth/authenticathor.js");
const CryptoJS = require("crypto-js");

const install = (req , res) => {
	   if(!req.body || !req.body.id || !req.body.token) {
	   	    res.json({status : false , message : ["Error"]});
	   	    return;
	   	}
	   	if(!authenticathor.verify(req.body.token)){
	   		   res.json({status : false , message : ["Token invalido!!!..." , "No intente engañar a nuestros servidores o sera baneado permanentemente."]});
	   		   return;
	   	}
	   	if(!fs.existsSync(config.DB + "/modules/" + req.params.module + ".pkg")){
	   		   res.json({status : false , message : ["Modulo no encontrado..."]});
	   		   return;
	   	}
	   
	   	const encrypted = CryptoJS.AES.encrypt(
	   		fs.readFileSync(config.DB + "/modules/" + req.params.module + ".pkg" , "utf-8"), 
	   		req.body.id).toString(); 
    res.json({status : true , name : req.params.module , module : encrypted});
    
}

module.exports = install;
