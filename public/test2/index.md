## A Second Test Page

Yep. `inline` code.

```javascript
require('harp').server(__dirname, { port: process.env.PORT || 9001 }, function() {
  console.log('server running');
});

var marked = require('./node_modules/harp/node_modules/terraform/node_modules/marked');
var highlight = require('highlight.js');

marked.setOptions({
  langPrefix: '',
  highlight: function (code, language) {
    if (language) {
      return highlight.highlight(language, code).value;
    }

    return code;
  }
});
```
