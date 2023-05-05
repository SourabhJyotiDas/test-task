const express = require("express");
const { createRegistrationForm, getAllUserDetails } = require("../controllers/form");

const router = express.Router();

router.route("/form/upload").post(createRegistrationForm);
router.route("/users").get(getAllUserDetails);


module.exports = router;
