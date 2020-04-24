const express = require("express");
const router = express.Router();
const History = require('../model/history');

router.get('/', async (req,res) => {
    try {
        const posts = await History.find();
        res.json(posts);

    } catch(err) {
        res.json({message:err});
    }
});


router.post('/',async (req,res)=> {
    const histPost = new History({
        gallons: req.body.gallons,
        orderdate: req.body.orderdate,
        deladdress: req.body.deladdress,
        deldate: req.body.deldate,
        suggestedprice: req.body.suggestedprice,
        totalammount: req.body.totalammount
    });
    try {
    const savedPost = await histPost.save();
    res.json(savedPost);
    }catch(err) {
        res.json({message: err});
    }
});

module.exports = router;