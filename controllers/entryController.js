const Entry = require("../models/Entry")

async function index(req, res){
    try{
        const entries = await Entry.getAll()
        res.status(200).send(entries)
    }catch(err){
        res.status(500).send({error: err.message})
    }
}

async function show(req, res){
    try{
        const idx = req.params.id
        const entry = await Entry.getOneById(idx)
        res.status(200).json(entry)

    }catch(err){
        res.status(400).send({error: err.message})
    }
}

async function create(req, res){
    try{
        data = req.body
        const entry = await Entry.createEntry(data)
        res.status(204).json(entry)

    }catch(err){
        res.status(400).send({error: err.message})
    }
}

async function update(req, res){
    try{
        const idx = parseInt(req.params.id)
        const data = req.body.entry_text
        const entry = await Entry.getOneById(idx)
        const result = await entry.updateEntry(data)

    }catch(err){
        res.status(400).send({error: err.message})
    }
}

module.exports = {
    index,
    show,
    create,
    update
}