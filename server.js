var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    
    'articleOne':  {
  title:'DEMO | DHARUN',
  heading: 'Article ONE',
  date: '19-09-2017',
  content: `
        <h1>Dharun</h1>
        <pre>ARTICLE ONE</pre>`
},
    'articleTwo': {
        title:'DEMO | DHARUN',
  heading: 'Article Two',
  date: '17-10-2017',
  content: `
        <h1>Arun</h1>
        <pre>ARTICLE Two</pre>`
    },
    'articleThree': {
        title:'DEMO | DHARUN',
  heading: 'Article Three',
  date: '30-11-2017',
  content: `
        <h1>Babu</h1>
        <pre>ARTICLE Three</pre>`
    },
    
};
function createTemplate (data){
    
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;

var htmlTemplate = `
<html>
    <head>
        <title>${title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
    </head>
    <body>
        <h1>
            ${heading}
        </h1>
        <div>
            ${date}
        </div>
        <div>
            ${content}
        </div>
    </body>
</html>

`;

return htmlTemplate;

}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function(req,res){
    //res.send("THIS IS Dharun Babu");
    //res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
