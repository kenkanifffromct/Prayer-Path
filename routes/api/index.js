const router = require("express").Router();
const prayerRoutes = require("./prayers");

// Prayer routes
router.use("/prayers", prayerRoutes);

module.exports = router;
