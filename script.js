let raceNumber = Math.floor(Math.random() * 1000);

var registeredEarly = false;

var runnerAge = 18;

if (runnerAge > 18 && registeredEarly === true) {
  raceNumber = raceNumber + 1000;
} 

if (runnerAge > 18 && registeredEarly === true) {
  console.log(`You will race at 9:30 am.  Your race number is ${raceNumber}.`);
} else if (runnerAge > 18 && registeredEarly != true) {
  console.log(`You will run at 11:00 am.  Your race number is ${raceNumber}.`);
} else if (runnerAge < 18) {
  console.log(`You will run at 12:30 pm.  Your race number is ${raceNumber}.`);
} else {
  console.log(`Runner, please see the registration desk.`);
}