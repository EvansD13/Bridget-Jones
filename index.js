require("dotenv").config();
const Spinner = require("cli-spinner").Spinner

const spinner = new Spinner(`API listening on ${process.env.PORT}...%s`)
const api = require("./api");

api.listen(process.env.PORT, () => {
    spinner.start();
})