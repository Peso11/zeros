module.exports = function getZerosCount(number) {
var xx =1;
var numberOfZeros=0;
do { numberOfZeros += Math.floor(number/Math.pow(5, xx));
xx++;
}
while (Math.pow(5, xx) <=number );

  return numberOfZeros;
}
