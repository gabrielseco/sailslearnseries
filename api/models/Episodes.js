/**
* Episodes.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  connection: 'remoteMysql',
  attributes: {
    id: {
        type: 'integer',
        autoIncrement: true,
        primaryKey: true
    },
    nombre:{
      type:'string',
    },
    numero:{
      type:'integer'
    },
    overview:{
      type:'text'
    },
    airdate:{
      type:'string'
    },
    serie:{
      model: 'series'
    }
  }
};
