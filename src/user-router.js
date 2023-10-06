const Router = require('../framework/Router.js');
const router = new Router();
const controller = require("./user-controller.js");

router.get('/users', controller.getUser);
router.post('/users', controller.createUser);

module.exports = router;