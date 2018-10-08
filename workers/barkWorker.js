const CronJob = require("cron").CronJob;

const createBarkWorker = num => {
  const barkWorker = new CronJob(
    `*/${num} * * * * *`,
    function() {
      console.log("bark");
    },
    null,
    false,
    "America/New_York"
  );
  return barkWorker;
};

module.exports = createBarkWorker;