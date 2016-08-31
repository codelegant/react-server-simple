require('babel-register');
const babel = require('babel-core');
const http = require('http');
const fs = require('fs');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const template = require('./template');
const LinkButton = require('./LinkButton');

http.createServer((req, res) => {
  if (req.url === '/') {
    const linkButton = React.createFactory(LinkButton);//工厂方法，将类转换为函数(React Element)
    const reactString = ReactDOMServer.renderToStaticMarkup(linkButton({ liked: false }));//渲染成字符串

    //将数据插入页面模板
    const body = template({
      body: reactString,
      title: 'Hello World from the server',
      initialState: JSON.stringify({ liked: false })
    });
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(body);
  } else if (req.url === '/bundle.min.js') {
    res.writeHead(200, { 'Content-Type': 'application/x-javascript' });
    res.end(fs.readFileSync('./bundle.min.js'));
  }
}).listen(3000, err => {
  if (err) throw err;
  console.log('Listen on 3000...');
});
