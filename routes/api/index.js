const router = require("express").Router();
const bookRoutes = require("./Books");

router.use("/books", bookRoutes);

module.exports = router;