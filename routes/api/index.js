const router = require("express").Router();
const prayerRoutes = require("./prayers");

// Book routes
router.use("/prayers", prayerRoutes);

module.exports = router;
