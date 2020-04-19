const express = require('express')
const app = express()
var cors = require('cors')
const bodyParser = require('body-parser')
const all_routes = require('express-list-endpoints')
const dotenv = require('dotenv');
var md5 = require('md5');
dotenv.config({
    path: './config.env'
  });
console.log(process.env.VIETNAM)
console.log(md5('09081990'));

const routes = require('./routes')
const port = 3000

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api', routes)
app.get('/', (_, res) => {
  res.send('Hello. This is TODO App APIs');
});

app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`)
    console.log(all_routes(app));
})
