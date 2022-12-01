const router = require("express").Router();
const Portifolio = require("../models/Project");

//posts
router.post("/", async (req, res) => {
  const portifolio = new Portifolio({
    title: req.body.title,
    image: req.body.image,
    description: req.body.description,
  });

  try {
    const savedPortifolio = await portifolio.save();
    res.json({
      sucess: true,
      data: savedPortifolio,
    });
  } catch (err) {
    res.json({
      sucess: false,
      message: err,
    });
  }
});

//gets
router.get("/", async (req, res) => {
  try {
    const portifolio = await Portifolio.find();
    res.json({
      sucess: true,
      data: portifolio,
    });
  } catch (err) {
    res.json({
      sucess: false,
      message: err,
    });
  }
});

router.get("/:slug", async (req, res) => {
  try {
    const portifolio = await Portifolio.findOne({ slug: req.params.slug });

    res.json({
      sucess: true,
      data: portifolio,
    });
  } catch (err) {
    res.json({
      sucess: false,
      message: err,
    });
  }
});

//update
router.patch("/:slug", async (req, res) => {
  try {
    const updatedPortifolio = await Portifolio.updateOne(
      {
        slug: req.params.slug,
      },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
        },
      }
    );

    res.json({
      sucess: true,
      updated: updatedPortifolio.matchedCount,
    });
  } catch (err) {
    res.json({
      sucess: false,
      message: err,
    });
  }
});

//delete
router.delete("/:slug", async (req, res) => {
  try {
    const deletedPortifolio = await Portifolio.deleteOne({
      slug: req.params.slug,
    });

    res.json({
      sucess: true,
      deleted: deletedPortifolio.deletedCount,
    });
  } catch (err) {
    res.json({
      sucess: false,
      message: err,
    });
  }
});

module.exports = router;
