//Configuracion principal del servidor
config = {
    URL : 'nexxus', 
    PORT : process.env.PORT || 8081,//puerto de escucha
    DIRNAME : __dirname, //directorio raiz
    DB : __dirname + '/database', //path a la base de datos
    LOGIC : __dirname + '/logic', //path a la logica
    GAME: {
    	    
    },
    START_NEXXUS_COIN : 5,
    server : {
    	    version : 'v0.0.1'
    }
};

module.exports = config;
