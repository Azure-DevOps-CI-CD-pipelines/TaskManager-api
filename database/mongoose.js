const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//mongoose.connect('mongodb://127.0.0.1:27017/taskmanagerdb', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
mongoose.connect('mongodb://nodeexpress:UrP7PSGia1HyXZWbx8AxeZeprS7y3d3y4aLK2VqBIm2OkgnVsweS7UmtY8BhpIGtu14mv3zdVvFAACDbRxEY8Q==@nodeexpress.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@nodeexpress@', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => {
        console.log("DB Connected Sucessfully!")
    })
    .catch((error) => {
        console.log("Error occurred while DB connection", error)
    });

module.exports = mongoose;