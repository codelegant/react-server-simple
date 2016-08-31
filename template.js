/**
 * 页面模板
 */
module.exports = ({body, title, initialState}) => {
  return `
  <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <script>window._INITIAL_STATE_ = ${initialState}</script>
        <title>${title}</title>
      </head>
      
      <body>
        <div id="root">${body}</div>
      </body>
      <script src="//cdnjs.cloudflare.com/ajax/libs/react/15.3.0/react.min.js"></script>
      <script src="//cdnjs.cloudflare.com/ajax/libs/react/15.3.0/react-dom.min.js"></script>
      <script src="/bundle.min.js"></script>
    </html>
    `;
}