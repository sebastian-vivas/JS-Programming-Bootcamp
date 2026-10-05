var clock = document.querySelector(".clock");
var sunArmCoffeeCup = document.querySelector(".cup-arm");
var degRotate = -20;
var degCounter = 0;
sunArmCoffeeCup.style.transform = "rotate(" + degRotate + "deg)";

setInterval(() => {
  var date = new Date();
  var hour = date.getHours(); // 0-23
  var mins = date.getMinutes(); // 0-59
  var msec = date.getTime(); // milliseconds since 1970 -- a huge number!
  // The getTime() method returns the number of milliseconds since the ECMAScript epoch
  // milliseconds since Jan 1, 1970, 00:00:00.000 GMT
  // milliseconds / 60 = seconds for Rolex-like smooth sweeping second hand

  console.log("msec:", msec);
  // "normalize" time units so that they are all in 0-1 range, with 1 being a
  // full 360 turn on the clock hand; so when hour = 6, hour for purposes,
  // of positioning the hour hand on the clock, needs to be normalized to 0.5
  // on top of that, hour needs to have the normalized minutes, divided by 12,
  // added to it
  // for hour, we need to only have values from 0-12.. so for 12-23, subtract 12
  // since we have to do math to arrive at norm values, and since conditions
  // apply as well, start by just initializing all norms to 0:
  var hourNorm = 0;
  var minsNorm = 0;
  var secsNorm = msec;

  // adjust the hour from mil time to am-pm (0-23 to 0-11)
  if (hour >= 12) {
    hour -= 12;
  }
  // calc normalized hour (0-12 => from 0-1), so divide by 12.. later we will add
  // hourMin/12 to hourNorm
  hourNorm = hour / 12 - 0.05; // normalize hour hand and add 'bias'

  secsNorm = msec / 1000; // seconds since 1970 -- but as float
  secsNorm /= 60; // divide that by 60 to get "normalized multiple" (remainder after doing x turns around clock is in 0-1 range)

  // add minNorm fraction to hourNorm, so that at, for example, 7:30,
  // the hour hand is half-way between 7 and 8
  minsNorm = mins / 60; // divide mins by 60 to normalize (get 0-1 range)

  hourNorm += minsNorm / 6; // divide by 6 results in more accurate hour hand position than dividing by 12

  minsNorm = mins / 60; // tweak the min hand

  // same for minsNorm? -- min hand should move w sec hand OR just tick every min

  var timeUnits = [hourNorm, minsNorm, secsNorm];

  // console.log(timeUnits[0] + ':' + timeUnits[1] + ':' + timeUnits[2]);

  // run a func on each item in positions arr where the current array item
  // is timeUnit and arrIndex is the index of same
  // the one line of code targets the child of the clock div:
  // the 3 children of the clock div are hr, min and sec hands, so
  // as the time unit is looped through, that unit is applied as the rotation
  // turn value of the corresponding clock hand div
  // 1 turn = 360 degrees
  timeUnits.forEach((timeunit, arrindex) => {
    clock.children[arrindex].style.transform = "rotate(" + timeunit + "turn)";
  });

  degCounter++;
  // every 1 min, reset degree counter to 0
  if (degCounter >= 2000) {
    // 40 times per sec x 60 sec = 2400 per min
    degCounter = 0;
  }

  // rotate sun arm coffee cup -- rotation reg pt is the shoulder
  if (degCounter < 500 || degCounter > 1500) {
    degRotate += 0.075; // 1/10 of a degree, so 40x per sec rotates 1/20 deg
    // so, in 1 sec rotates 4 degs
  } else {
    degRotate -= 0.075;
  }

  sunArmCoffeeCup.style.transform = "rotate(" + degRotate + "deg)";
}, 40);

/*
<div class="clock">
<div class="hourhand"></div>
<div class="minutehand"></div>
<div class="sechand"></div>
</div>
*/
