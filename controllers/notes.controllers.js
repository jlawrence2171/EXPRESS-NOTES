const Notes = require("../models/notes.models")

exports.createNote = (req, res) =>{
    Notes.create(req.body)
    .then(data =>{
        res.status(201).send({
            message: "Note has been created",
            data
        })
    })
    .catch(error =>{
        res.status(500).send({error: error.message})
    })
}

exports.getNotes = (req, res) =>{
    Notes.find( {})
    .then(data =>{
        res.status(200).send({
            message: "Here are all the notes",
            data
        })
    })
    .catch(error =>{
        res.status(500).send({
            error:error.message
        })
    })
}
exports.getNoteById = (req, res) =>{
    Notes.findById({_id: req.params.id}
        )
        .then( data => {
            res.status(200).send({
                message: "Here is Note " + req.params.id,
                data
            })
            
        })
        .catch(error =>{
            res.status(500).send({
                error:error.message
            })
        })
}
exports.updateById =(req, res)=>{
    Notes.findByIdAndUpdate({_id: req.params.id}, req.body
        )
        .then( data => {
            res.status(200).send({
                message: "updated " + req.params.id,
                data
            })
            
        })
        .catch(error =>{
            res.status(500).send({
                error:error.message
            })
        })
}
exports.deleteById =(req, res)=>{
    Notes.findByIdAndDelete({_id: req.params.id}
    )
    .then(data => {
        res.status(200).send({
            message: "deleted "
            
        })
    })
    .catch(error =>{
        res.status(500).send({
            error:error.message
        })
    })
}