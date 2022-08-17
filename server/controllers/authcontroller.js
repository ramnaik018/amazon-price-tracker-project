const User = require('../models/User')
const Product = require('../models/product')
const bcrypt= require('bcryptjs')
const jwt = require('jsonwebtoken')

const register=function(req,res,next){
    bcrypt.hash(req.body.password,10,function(err,hashedpass){
        if(err){
            res.json({
                error:err
            })
        }
        let user = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedpass,
        })
        user.save()
        .then(user=>{
            res.json({message:'User added sussesfully'})
        })
        .catch(err=>{
            res.json({message:err})
        })
    
    })
}


const login=function(req,res,next){
    var username = req.body.username
    var password = req.body.password
    // console.log(username)
    User.findOne({username:username})
        .then(user=>{
            // console.log(user)
            if(user){
                bcrypt.compare(password,user.password,function(err,result){
                    if(err){
                        res.json({error:'ererer'})
                    }
                    if(result){
                        let token=jwt.sign({username: user.username},'verySecretValue',{expiresIn:'1h'})
                        res.json({
                            message:"Login Successfully",
                            token
                        })
                    }
                    else{
                        res.json({message:"Password dosent matched!"})
                    }
                }) 
            }else{
                res.json({message:'No user found'})
            }
        })
}

const product=function(req,res,next){
    let product= new Product({
        name:req.body.name
    })
    product.save()
        .then(product=>{
            res.json({message:'Products added sussesfully'})
        })
        .catch(err=>{
            res.json({error:err})
        })
}

module.exports={
    register,login,product
}