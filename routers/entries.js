const express = require("express")
const diaryController = require("../controllers/entryController")
const diaryRouter = express.Router()

diaryRouter.get("/", diaryController.index)
diaryRouter.get("/:id", diaryController.show)
diaryRouter.post("/", diaryController.create)
diaryRouter.patch("/:id", diaryController.update)
diaryRouter.delete("/:id", diaryController.destroy)

module.exports = diaryRouter