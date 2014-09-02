## A Second Test Page

> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
> 
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.

Yep. `inline` code.

* bullets
* are
* nice

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
