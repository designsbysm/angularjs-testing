const assetFolder = "/../client";
const express = require("express");
const path = require("path");

const router = express.Router();

router.use("/", express.static(`${__dirname}${assetFolder}/`));
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, assetFolder, "/views", "app.html"));
});

module.exports = router;
