//db.js

const mongoose = require('mongoose')

// const url = `mongodb+srv://<username>:<password>@<cluster_name>.xgu2t.mongodb.net/?retryWrites=true&w=majority&appName=<cluster_name>;
const url = process.env.MONGOURL

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })