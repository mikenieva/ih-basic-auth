const express = require('express');

const router = express.Router();


/* GET home page */
router.get('/', (req, res) => {
  let data;
  if(res.locals.currentUser){
    data = "Hay un usuario conectado"
  } else{
    data = "No hay un usuario"
  }
  res.render('index', { title: data }
  )
});

module.exports = router;
