//step 1
let raceNumber = Math.floor(Math.random() * 1000);

//step 2 create variable indicating registration is early or not. make it equal to boolean value 
let registrationEarly = true;

//step 3 create variable for runner age and make it number
let runnerAge = 32; 

//step 4 create flow statement checking age and registration
if (runnerAge > 18 && registrationEarly) {
    raceNumber += 1000;
}

//step 5 & 6 create another statement, checking age and registration time 
if (runnerAge > 18 && registrationEarly) {
    console.log(`Your race will start at 9:30a. Your bib number is ${raceNumber}`);
} else if (runnerAge > 18 && !registrationEarly) {
    console.log(`Your race will start at 11:00a. Your bib number is ${raceNumber}`);
} else if (runnerAge < 18) {
    console.log('Youth registrations run at 12:30p (regardless of registration)');
}
