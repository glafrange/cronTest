const CronJob = require("cron").CronJob;

const createSortWorker = arr => {
  let sortWorker = new CronJob(
    "* * * * * *",
    function() {
      this.stop()
      arr = arr.map(name => name.toLowerCase()).sort()
      console.log(arr);
    },
    null,
    true,
    "America/New_York"
  );
}

module.exports = createSortWorker;