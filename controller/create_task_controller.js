const bodyParser = require('body-parser');
const TaskList = require('../models/tasks')

module.exports.create = function(req, res){
    console.log(req.body);
    TaskList.create({
        task: req.body.task,
        tags: req.body.tags,
        date: req.body.date,
    }, function(err, newTask){
        if(err){
            console.log("Error on creating new Task");
            return;
        }

        console.log('**********', newTask);
        return res.redirect('back');
    })
    
}