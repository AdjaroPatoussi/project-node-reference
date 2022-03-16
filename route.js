const middleware = require("./middleware")

//middleware = require("./middleware")
module.exports = function(app){
    
    app.get("/", middleware.flash,(req,res)=>{
        
        console.log(req.session.flash)
        res.render('index')
        
    })

    app.post("/", middleware.flash,(req,res)=>{
        req.flash('error','j ai des preovn')
        res.redirect('/')
        
    })
}