const express = require("express")
const diaryController = require("../controllers/entryController")
const diaryRouter = express.Router()

diaryRouter.get("/", diaryController.index)

module.exports = diaryRouter