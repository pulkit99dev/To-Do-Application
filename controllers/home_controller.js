const Task = require('../model/tasks');

module.exports.home = function(req, res){
    Task.find({}, function(err, tasks){
        if(err){
            console.log('error in fetching the data');
            return;
        }
        return res.render('home', {
            title : "Todo List",
            task_list: tasks
        })
    })
}