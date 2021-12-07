//const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//
//   console.log('It worked! Returned IP:' , ip);
// });
//
// fetchCoordsByIP("99.252.60.109", (error, coords) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//
//   console.log("It worked! Returned coordinates: ", coords);
// });
//
// fetchISSFlyOverTimes({latitude: 43.7489, longitude: -79.4422}, (error, flyOverTimes) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//
//   console.log("It worked! Returned fly over times: ", flyOverTimes);
// });


const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  console.log(passTimes);
});
