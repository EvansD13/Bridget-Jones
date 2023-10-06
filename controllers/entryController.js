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

module.exports = {
    index
}