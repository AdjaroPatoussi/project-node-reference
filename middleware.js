module.exports =  {
    flash:function(req, res, next){
        if(req.session.flash){
            res.session.flash= req.session.flash
            req.session.flash= undefined
        }

        req.flash= (type, content)=>{
            if(req.session.flash === undefined )
            {
                req.session.flash={}
                
            }

            req.session.flash[type]= content

        }
        next()
    }
}