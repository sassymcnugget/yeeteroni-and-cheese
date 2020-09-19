// imports
const router = require("express").Router();
const ctrl = require("../controllers");
const passport = require("../passport");

// router
//path: apli/v1/auth
router.post("/login", passport.authenticate("local"), ctrl.auth.login);
router.delete("/logout", ctrl.auth.logout);
router.post("/register", ctrl.auth.register);
//utilty route:
//router.get('/verify', ctrl.auth.verify)

// exports
module.exports = router;
