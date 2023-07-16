function distanceFromHqInBlocks(pickupLocation) {
const hqLocation = 42;
return Math.abs(pickupLocation - hqLocation)
}

function distanceFromHqInFeet(pickupLocation) {
const feetPerBlock = 264;
const blocksFromHq = distanceFromHqInBlocks(pickupLocation);
return blocksFromHq * feetPerBlock;
}

function distanceTravelledInFeet(startBlock, destinationalBlock) {
const feetPerBlock = 264;
const blocksTraveled = Math.abs(destinationalBlock - startBlock);
return blocksTraveled * feetPerBlock;
}

function calculatesFarePrice (startBlock, destinationalBlock){
const feetTraveled = distanceTravelledInFeet(startBlock, destinationalBlock);
if (feetTraveled <= 400) {
    return 0;
} else if (feetTraveled > 400 && feetTraveled <= 2000) {
    return (feetTraveled - 400) * 0.02;
} else if (feetTraveled > 2000 && feetTraveled < 2500) {
    return 25;
} else if (feetTraveled >= 2500) {
    return 'cannot travel that far';
}

}