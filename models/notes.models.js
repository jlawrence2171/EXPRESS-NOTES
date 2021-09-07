const {Schema, model} =require("mongoose")

const notesModel = new Schema({
    message: {type: String, required: true, minlength: 5, maxlength: 300}
},  {timestamps: true})

const Notes = model("notes", notesModel)

module.exports = Notes
