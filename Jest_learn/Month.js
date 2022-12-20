function countDown(n){
  if (typeof (n) == "number"){
    const reverceNumber = n.toString().split('').reverse().join('');
    return (+reverceNumber);
  }else{
    return ("Данные не верны,пожалуйста введите число")
  }
}
countDown(5789)
module.exports = countDown;

