const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.status(200).send({ "msg": [1,2,3,4,5] });
});


module.exports = router;