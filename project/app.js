const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./models');



const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require('./routes'));

// try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }

db.sequelize.sync().then(()=>{
    console.log('Models Sync Successfully')
}).catch((err)=>{  
    console.log('Unable to sync model', err)
});




module.exports = app;



