//#1
function distanceFromHqInBlocks(pickupBlock) {
    const hqBlock = 42;
    if (pickupBlock > 42) {
        return pickupBlock - hqBlock
    } else {
        return hqBlock - pickupBlock
    }
}
console.log(distanceFromHqInBlocks(43));


//#2
function distanceFromHqInFeet(pickupBlock) {
   return distanceFromHqInBlocks(pickupBlock) * 264

}
console.log(distanceFromHqInFeet(43));

//#3
function distanceTravelledInFeet(start, destination) {
    const blockLengthInFeet = 264;
    if (start > destination) {
        return (start - destination) * 264
    } else {
        return (destination - start) * 264
    }
}
console.log(distanceTravelledInFeet(43, 48));

//#4
function calculatesFarePrice(start, destination) {
   //let price = 0;
   if (distanceTravelledInFeet(start, destination) < 400) {
        return 0
   } else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000) {
        return (distanceTravelledInFeet(start, destination) - 400) * .02
   } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500) {
       return 25
   } else {
       return "cannot travel that far"
   }
}
calculatesFarePrice(43, 48);