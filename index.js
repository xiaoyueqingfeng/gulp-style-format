var through = require('through2');

function format(file) {
  var contents = String(file.contents)
  contents = contents.replace(/\s*{\s*/g, ' {\n\t').replace(/\s*}\s*/g, '\n}\n').replace(/\s*([:,])(?!:)\s*/g, '$1 ').replace(/\s*;\s*/g, ';\n\t')
  file.contents = Buffer.from(contents);
  return file;
}

module.exports = function () {
  return through.obj(function (file, encoding, callback) {
    var newFile = null;
    var err = null;
    try {
      newFile = format(file);
    } catch (e) {
      err = e;
    }
    callback(err, newFile);
  });
}