const { query } = require('express');
const Tasks = require('../models/tasks')

module.exports.delete = function(req, res){
    console.log(req.query);
    console.log(req.query.id);
    let id = req.query.id;

    Tasks.findByIdAndDelete(id, function(err){
        if(err){
            console.log("cannot find the Task and delete", err);
            return;
        }
        return res.redirect('back');
    })
}