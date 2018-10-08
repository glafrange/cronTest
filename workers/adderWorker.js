var CronJob = require("cron").CronJob;

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

var addRandomNumbers = num => {
  const adderWorker = new CronJob(
    "* * * * * *",
    function() {
      this.stop();
      let total = 0;
      for (let i = 0; i < num; i++) {
        total += getRandom(10, 101);
      }
      console.log(`total is: ${total}`);
    },
    null,
    false,
    "America/New_York"
  );
  adderWorker.start();
};

module.exports = addRandomNumbers;
