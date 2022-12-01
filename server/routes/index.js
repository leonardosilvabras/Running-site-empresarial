const router = require("express").Router();
const project = require("./project");

require('../database/mongoConnection')

router.get("/", (req, res) => {
  res.json({
    sucess: false,
    message: "err",
  });
});

router.use("/project", project);

module.exports = router;
