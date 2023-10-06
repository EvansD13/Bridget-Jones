const fs = require('fs');
const path = require("path")

require("dotenv").config()
const db = require("./connect")

const sql = fs.readFileSync(path.join(__dirname, 'setup.sql')).toString();

db.query(sql)
    .then(data => console.log("Set-up complete."))
    .catch(error => console.log(error));