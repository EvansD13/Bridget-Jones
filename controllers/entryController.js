const Entry = require("../models/Entry")

async function index(req, res){
    try{
        const entries = await Entry.getAll()
        console.log(entries)
        res.status(200).send(entries)
    }catch(err){
        res.status(500).send({error: err.message})
    }
}

async function show(req, res){
    try{
        console.log(req.params)
        const idx = req.params.id
        const entry = await Entry.getOneById(idx)
        console.log(entry)
        res.status(200).json(entry)

    }catch(err){
        res.status(400).send({error: err.message})
    }
}

async function create(req, res){
    try{
        data = req.body
        const entry = await Entry.createEntry(data)
        console.log(entry)
        res.status(204).json(entry)

    }catch(err){
        res.status(400).send({error: err.message})
    }
}

module.exports = {
    index,
    show,
    create
}