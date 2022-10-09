const express = require('express');


const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const port = 8000;

const db = require('./config/mongoose');
const Tasks = require('./models/tasks')
// use express router
app.use('/', require('./routes/index'))
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('./assets'));


app.listen(port, function(err){
    if(err){
        console.log("Error in running the server", err);
        return;
    }

    console.log("Server is running on port: ", port);
})