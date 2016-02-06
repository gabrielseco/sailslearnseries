/**
* Dictionary.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  connection: 'localMysql',
  attributes: {
    id: {
        type: 'integer',
        autoIncrement: true,
        primaryKey: true
    },
    english:{
      type:'string'
    },
    spanish:{
      type:'string'
    },
    series:{
      model: 'series'
    },
    peliculas:{
      model: 'films'
    },
    libros: {
      model: 'books'
    },
    episodios: {
      model: 'episodes'
    }
  }
};
