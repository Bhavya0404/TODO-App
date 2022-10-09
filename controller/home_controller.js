const Tasks = require('../models/tasks');

module.exports.home = function(req, res){
    Tasks.find({}, function(err, taskList){
        if(err){
            console.log("eror in fetchinf data", err);
            return;
        }

        // console.log("Line 5TH", taskList);
        return res.render('home', {
            title: 'TODO App',
            tasks: taskList,
        })
        
    })
    
    
}