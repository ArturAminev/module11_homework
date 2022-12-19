function countDown(n){
  const reverceNumber = n.toString().split('').reverse().join('');
  return +reverceNumber;
}
countDown(71348)
module.exports = countDown;