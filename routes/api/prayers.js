const router = require("express").Router();
const prayersController = require("../../controllers/prayersController");

// Matches with "/api/prayers"
router.route("/")
  .get(prayersController.findAll)
  .post(prayersController.create);

// Matches with "/api/prayers/:id"
router
  .route("/:id")
  .get(prayersController.findById)
  .put(prayersController.update)
  .delete(prayersController.remove);

module.exports = router;
