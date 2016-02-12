/**
* Films.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    id: {
        type: 'integer',
        autoIncrement: true,
        primaryKey: true
    },
    nombre:{
      type:'string'
    },
    overview:{
      type:'text'
    },
    imagen:{
      type:'string'
    },
    year:{
      type:'string'
    },
    idMovieDB:{
      type:'string'
    },
    color: {
      type: 'string'
    }
  }
};
