var express = require("express");
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");

var app = express();
var compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath // 大部分情况下和 `output.publicPath`相同
}));

// app.use(express.static(`${__dirname}/static`))

app.get('*',function(req, res){
    res.send('this is first route')
})
app.listen(1000, function () {
  console.log("Listening on port 1000!");
});