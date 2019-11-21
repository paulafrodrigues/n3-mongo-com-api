const express = require("express")
const router = express.Router()
const controller = require("../controller/contatosController")

router.get("/", controller.getAll)
router.get("/nome/:nome", controller.getByName)
router.get("/id/:id", controller.getById)
router.post("/criar", controller.add)
router.patch("/atualizar/:id", controller.updateById)
router.delete("/delete/:id", controller.deleteById)

module.exports = router;
