const router = require(`express`).Router();
const apiRoutes = require(`./apiRoutes`);

router.use(`/email`, apiRoutes);

module.exports = router;