var fs = require('fs');
var path = require('path');

module.exports = function(directory, ext, callback) {
fs.readdir(directory, function (err, files) {  
if (err) {
     return callback(err)
};
 const filteredfile=files.filter(file=>path.extname(file)===`.${exact}`);
 callback(null,filteredfile);
  });
 };