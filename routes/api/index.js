const router = require("express").Router();
const bookRoutes = require("./Books");
const bookController = require("../../controllers/bookController");

router.use("/books", bookRoutes);
router.route("/removeBook/:id").delete(bookController.deleteBook);
router.route("/addBook/").post(bookController.addBook);
module.exports = router;