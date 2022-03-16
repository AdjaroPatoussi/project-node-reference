//mise en place du serveur
let express = require('express')
let app  = express()
let  port = "3000"
app.listen(port ,()=>{
    console.log(port)
})

//statics
app.set("view engine", "ejs")

//middle
app.use('/public',express.static('public'))

//gestion de la session
let session = require('express-session')

//middle
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))



//body parser pour recuooer les post 
let bodyparser = require('body-parser')
const middleware = require('./middleware')

//middle
app.use(bodyparser.urlencoded({extended: false}))
// ou 
var  urlencoded =  bodyparser.urlencoded({extended:false})



//
//middleware = require('./middleware')
// app.get("/a", (req,res)=>{
//     console.log('a')
//     res.send("eaa")
    
// })

//app.use(require('./middleware'))
require("./route")(app)

