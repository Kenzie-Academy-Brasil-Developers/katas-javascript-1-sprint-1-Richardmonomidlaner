function oneThroughTwenty() {
  let x = [];
  for (let i = 1; i <= 20; i++) {
    x += i + ', ';
  }
  return [x];
}
console.log(oneThroughTwenty());

function evensToTwenty() {
  let even = [];
  for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) even += i + ", ";
  }
  return [even];
}
console.log(evensToTwenty());

function oddsToTwenty() {
  let odd = [];
  for (let i = 20; i >= 0; i--) {
    if (i % 2 === 1) odd += i + ", ";
  }
  return [odd];
}
console.log(oddsToTwenty());

function multiplesof5to100() {
  let multiple = [];
  for (let i = 0; i <= 100; i++) {
    if (i % 5 === 0) multiple += i + ", ";
  }
  return [multiple];
}
console.log(multiplesof5to100());

function squareto100() {
  let square = [];
  for (let i = 0; i <= 10; i++) {
    square += Math.pow(i, 2) + ", ";
  }
  return [square];
}
console.log(squareto100());

function countingBackwards() {
  let x = [];
  for (let i = 20; i >= 0; i--) {
    x += i + ", ";
  }
  return [x];
}
console.log(countingBackwards());

  function evenNumbersBackwardstoTwenty(){
  let even = [];
  for (let i = 20; i >= 0; i--) {
    if (i % 2 === 0) {
      even += i + ", ";
    }
  }
  return [even];
}
console.log(evenNumbersBackwardstoTwenty());

function BackwardsoddsToTwenty() {
  let odd = [];
  for (let i = 20; i >= 0; i--) {
    if (i % 2 === 1) odd += i + ", ";
  }
  return [odd];
}
console.log(BackwardsoddsToTwenty());

function Backwardsmultiplesof5to100() {
  let multiple = [];
  for (let i = 100; i >= 0; i--) {
    if (i % 5 === 0) multiple += i + ", ";
  }
  return [multiple];
}
console.log(Backwardsmultiplesof5to100());

function Backwardssquareto100() {
  let square = [];
  for (let i = 10; i >= 0; i--) {
    square += Math.pow(i, 2) + ", ";
  }
  return [square];
}
console.log(Backwardssquareto100());
