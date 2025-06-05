// Code your solution in this file!
// 1. Returns the number of blocks from Scuber's headquarters (42nd Street)
function distanceFromHqInBlocks(someValue) {
  return Math.abs(someValue - 42);
}

// 2. Returns the number of feet from Scuber's headquarters
function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
}

// 3. Calculates the number of feet a passenger travels
function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}

// 4. Calculates the fare price for the customer
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}