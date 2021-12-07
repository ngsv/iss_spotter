const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = function(passTimes) {
  for (let i = 0; i < passTimes.length; i++) {
    let datetime = new Date(0);
    datetime.setUTCSeconds(passTimes[i]["risetime"]);
    console.log(`Next pass at ${datetime} for ${passTimes[i]["duration"]} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});
