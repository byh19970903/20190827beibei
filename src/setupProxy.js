const proxy = require("http-proxy-middleware");

module.exports = (app)=>{
    app.use(proxy("/martgoods",{
        target:"https://dsapi.beibei.com",
        changeOrigin:true,
    }))
}