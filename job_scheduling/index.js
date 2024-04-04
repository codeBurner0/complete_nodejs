const schedule = require("node-schedule");
// const date=new Date()

// schedule.scheduleJob('*/2 * * * * *',()=>{
//     console.log("i am running")
// })--> run after 2 sec

// schedule.scheduleJob('*/1 * * * *',()=>{
//     console.log("i am running")
// })--> run after 1 min

// schedule.scheduleJob('mjob','*/1 * * * * *',()=>{
//     console.log("i am running")
//     schedule.cancelJob('mjob')
// })-- to cancel a job

// const mjob=schedule.scheduleJob('*/1 * * * * *',()=>{
//     console.log("infinity ki power infinity 💌")
// })

// hii()

function hii() {
  setTimeout(() => {
    console.log("Hello 🙋");
  }, 1000);

  setTimeout(() => {
    console.log("ese kya dekh raha hai 🤔");
  }, 2000);

  setTimeout(() => {
    console.log("faltu aadmi 😂");
  }, 4000);

  setTimeout(() => {
    console.log("abhi pitega ki baad me 🙂");
  }, 6000);

  setTimeout(() => {
    console.log("abe jaa sale chutiye 😆");
  }, 8000);

  setTimeout(() => {
    console.log("sare milke bolo aditya chutiya hai 🤭");
  }, 10000);

  setTimeout(() => {
    schedule.scheduleJob("*/2 * * * * *", () => {
      console.log("CHUTIYA 😆...");
    });
  }, 11000);
}

console.log(new Date().toString());

const job = schedule.scheduleJob("50 11 * * *", () => {
  hii();
});

const helo = schedule.scheduleJob("51 11 * * *", () => {
  job.cancel()
});

// console.log(new Date().toString())

// crontab guru website--> to get cron expressions
