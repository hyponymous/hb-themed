/**
 * See https://gist.github.com/gnab/7915894
 */

if (process.argv[process.argv.length - 1] === '--compile') {
  require('harp').compile(__dirname, 'www', function(errors) {
    if(errors) {
      console.log(JSON.stringify(errors, null, 2))
      process.exit(1)
    }
    console.log('done');
  });
} else {
  require('harp').server(__dirname, { port: process.env.PORT || 9001 }, function() {
    console.log('server running');
  });
}

var marked = require('./node_modules/harp/node_modules/terraform/node_modules/marked');
var hljs = require('highlight.js');

marked.setOptions({
  highlightClass: 'hljs',
  highlight: function (code, language) {
    if (language) {
      return hljs.highlight(language, code).value;
    }

    return hljs.highlightAuto(code).value;
  }
});

