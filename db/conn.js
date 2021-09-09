const mongoose = require('mongoose')

const DB = process.env.database;
 mongoose.connect(DB,{
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(() => {
    console.log('connection to db is success');
}).catch((err) => {
    console.log('connection to db is failure');
})