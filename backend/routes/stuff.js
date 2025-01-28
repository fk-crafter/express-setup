const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");

const stuffCtrl = require("../controllers/stuff");

// fetch all Thing on sell
router.get("/", auth, stuffCtrl.getAllThings);

// create Thing
router.post("/", auth, stuffCtrl.createThing);

// read Thing
router.get("/:id", auth, stuffCtrl.getOneThing);

// update Thing
router.put("/:id", auth, stuffCtrl.updateThing);

// delete Thing
router.delete("/:id", auth, stuffCtrl.deleteThing);

module.exports = router;
