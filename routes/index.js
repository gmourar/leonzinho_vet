const express = require('express');
const router = express.Router();

// main page (landing)
router.get('/' , (req,res) =>{
    res.sendFile('index.html' , {root: './public'});
}); 

// login page 

router.get('/login' , (req,res)=>{
    res.render('login');
});

// register page
router.get('/cadastro' , (req,res)=>{
    res.render('cadastro');
});

module.exports = router