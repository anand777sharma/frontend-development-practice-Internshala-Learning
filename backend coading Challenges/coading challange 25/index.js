var http = require("http");

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`<div style="text-align: center">
    <h1>Blog post title</h1>
    <h2>Blog post subtitle</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Sed tincidunt, sapien vitae vestibulum tristique, mauris 
     dui efficitur tortor, tempus viverra massa lacus nec sem.
      Proin risus felis, porta vel lorem vitae, lobortis pulvinar 
      sapien. Integer condimentum libero in nibh ullamcorper pharetra. 
      Integer faucibus rutrum eros, ac tincidunt felis consectetur sollicitudin.
      
      Nunc sed ultrices ex, in gravida diam. </p> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, sapien vitae vestibulum tristique, mauris dui efficitur tortor, tempus viverra massa lacus nec sem. Proin risus felis, porta vel lorem vitae, lobortis pulvinar sapien. Integer condimentum libero in nibh ullamcorper pharetra. Integer faucibus rutrum eros, ac tincidunt felis consectetur sollicitudin. Nunc sed ultrices ex, in gravida diam. 
      </p>
       </div>`)
}).listen(5000);
