const CronJob = require("cron").CronJob;

const mainWorker = new CronJob(
  "*/5 * * * * *",
  function() {
    console.log("every 5 seconds");
  },
  null,
  false,
  "America/New_York"
);

module.exports = mainWorker;
