const router = require("express").Router();
const bookRoutes = require("./Books");

router.use("/books", bookRoutes);
router.use("/searchBooks", bookRoutes);
module.exports = router;