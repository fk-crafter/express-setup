const express = require("express");
const router = express.Router();

const stuffCtrl = require("../controllers/stuff");

// create Thing
router.post("/", stuffCtrl.createThing);

// update Thing
router.put("/:id", stuffCtrl.updateThing);

// delete Thing
router.delete("/:id", stuffCtrl.deleteThing);

// read Thing
router.get("/:id", stuffCtrl.getOneThing);

// fetch all Thing on sell
router.get("/", stuffCtrl.getAllThings);

module.exports = router;
