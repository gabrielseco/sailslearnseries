/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */


module.exports.bootstrap = function(cb) {
  /*var sys = require('sys')
  var exec = require('child_process').exec;
  var spawn = require('child_process').spawn

  spawn('open', ['http://localhost:1337/#/', 'http://www.wordreference.com/']);



  var child;

  var date = new Date();


  var fecha = date.getFullYear() + "-" + date.getMonth() + 1 + "-" + date.getDate();

  var file = "../sql-backup/learnseries"+ fecha + ".sql";


  child = exec("mysqldump -u root -p learnseries > " +file, function (error, stdout, stderr) {

    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });*/


  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};
