const schedule = require('node-schedule');
const {Messages} = require('./schema.js');

const dailyReset = schedule.scheduleJob('0 0 0 * * *',async (firedTime) => {

    await Messages.updateMany(
         { },
         {'dailyMsg':0}
      )
    
});
module.exports.dailyReset = dailyReset

const monthlyReset = schedule.scheduleJob('0 0 0 0 * *',async (firedTime) => {

    await Messages.updateMany(
         { },
         {'monthlyMsg':0}
      )
    
});
module.exports.monthlyReset = monthlyReset
