const express = require('express');
const router = express.Router();


router.get('*',(req, res)=>{
    res.status(404);
    res.json({404 : "not found"});
});

module.exports = router;