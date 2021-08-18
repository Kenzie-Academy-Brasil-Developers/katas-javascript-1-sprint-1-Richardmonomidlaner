function oneThroughTwenty() {
  let number = [1,2,3,4,5,6,7,8,9,10];
 number.push(11,12,13,14,15,16,17,18,19,20);
  return number;
}
console.log(oneThroughTwenty());

function evensToTwenty() {
  let even = [0,2,4,6,8,10];
  even.push(12,14,16,18,20);
  return even;
}
console.log(evensToTwenty());

function oddsToTwenty() {
  let odd = [1,3,5,7,9];
 odd.push(11,13,15,17,19);
  return odd;
}
console.log(oddsToTwenty());

function multiplesof5to100() {
  let multiple = [5,10,15,20,25,30,45,50];
  multiple.push(55,60,65,70,75,80,85,90,95,100);
  return multiple;
}
console.log(multiplesof5to100());

function squareto100() {
  let square = [1,4,9,16,25,36,49,64];
  square.push(81,100);
  return square;
}
console.log(squareto100());

function countingBackwards() {
  let number = [20,19,18,17,16,15,14,13,12,11,10];
  number.push(9,8,7,6,5,4,3,2,1);
  return number;
}
console.log(countingBackwards());

  function evenNumbersBackwardstoTwenty(){
  let even = [20,18,16,14,12,10];
  even.push(8,6,4,2,0);
  
  return even;
}
console.log(evenNumbersBackwardstoTwenty());

function BackwardsoddsToTwenty() {
  let odd = [19,17,15,13,11];
 odd.push(9,7,5,3,1);
  return odd;
}
console.log(BackwardsoddsToTwenty());

function Backwardsmultiplesof5to100() {
  let multiple = [100,95,90,85,80,75,70,65,60,55,50];
 multiple.push(45,40,35,30,25,20,15,10,5);
  return multiple;
}
console.log(Backwardsmultiplesof5to100());

function Backwardssquareto100() {
  let square = [100,81,64];
  square.push(49,36,25,16,9,4,1);
  return square;
}
console.log(Backwardssquareto100());
