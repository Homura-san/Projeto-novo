const router = require('express').Router();
const Sender = require('../models/Sender');

router.post('/', async (req, res) => {
    const {name, package, adress} = req.body;

    if(!name){
        res.status(422);
    }

    if(!package){
        res.status(422);
    }

    if(!adress){
        res.status(422);
    }

    const sender = {
        name,
        package,
        adress
    }
    
    try {
        await Sender.create(sender);
        res.redirect('/');
    }
    catch (error){
        return err;
    }
})

module.exports = router;