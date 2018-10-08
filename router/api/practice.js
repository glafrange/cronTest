const express = require("express");
const router = express.Router();
const createBarkWorker = require("../../workers/barkWorker");
const createSortWorker = require("../../workers/sortWorker");

//route: GET /api/main
router.get("/", (req, res) => res.json({ status: "success" }));

let barkWorker = {};

router.get("/start/:num", (req, res) => {
  if (barkWorker.running) {
    return res.json({ status: "already running" });
  }
  barkWorker = createBarkWorker(req.params.num);
  barkWorker.start();
  return res.json({ status: "started worker" });
});

router.get("/stop", (req, res) => {
  if (!barkWorker.running) {
    return res.json({ status: "worker not running "});
  }
  barkWorker.stop();
  return res.json({ status: "worker stopped" });
});

router.post("/sort", (req, res) => {
  createSortWorker(req.body.array);
  return res.json({ status: "array sorted" });
});

module.exports = router;