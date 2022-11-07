//este archivo script.js es para poder hacer pruebas utilizando Axios
//para importar librerías puede ser con "iport" o con "require" y esto va a depender del autor de la librería
const axios = require('axios'); //importamos la libreria Axios 
// en el Descript va si el .default
// en el React Native va con .default así: const axios = require('axios').default;

axios.get("https://sunrise-sunset.org/") //si la documentación de la api no lo aclara, entonces usa método "get"
//un .then por si sale bien
    .then(function (response){
        console.log(response);
        //console.log(response.status); si quisieramos acceder al estado
        //console.log(response.data); si quisieramos acceder al body
        //console.log(response.data.facts[0]); si quisieramos acceder al body pero a la posición 0 del facts

    })
    //un .catch por si algo falla
    .catch(function (error){
        console.log(error);
    })