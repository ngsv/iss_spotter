const { nextISSTimesForMyLocation } = require("./iss_promised");

const printPassTimes = function(passTimes) {
  for (let i = 0; i < passTimes.length; i++) {
    let datetime = new Date(0);
    datetime.setUTCSeconds(passTimes[i]["risetime"]);
    console.log(`Next pass at ${datetime} for ${passTimes[i]["duration"]} seconds!`);
  }
};

nextISSTimesForMyLocation()
  .then(passTime => {
    printPassTimes(passTime);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });
