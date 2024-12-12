const router = require('express').Router();
const Sender = require('../models/Sender');

router.get('/create', (req, res)=> {
    res.render("edit");
})

router.get('/edit/:id', (req, res)=> {
    id = req.body.id;
    const sender = Sender.findOne({_id: id})
    res.render("edit", {sender:sender});
})


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

router.post('/edit/:id', (req, res) => {
    id = req.params.id;
    const {name, package, adress} = req.body;
    const sender= {
        name,
        package,
        adress
    }

    const update = Sender.updateOne({_id: id}, sender);
    if(update.matchedCount === 0){
        res.status(422).json({message: 'O usuário não foi encontrado.'})
        return
    }
    res.redirect('/');
})

module.exports = router;