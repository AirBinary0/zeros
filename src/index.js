module.exports = function zeros(expression) {
  let two = 0, five = 0;
  let arr = expression.split('*');
  for (let i = 0; i < arr.length; i++) {
    let data = arr[i].split('!');
    if (data.length == 2) {
      for (let j = 2; j <= Number(data[0]); j++){
        let test = j;
        while (test%2 == 0) {
          two++;
          test/=2;
        }
        test = j;
        while (test%5 == 0) {
          five++;
          test/=5;
        }
      }
    }
    if (data.length == 3) {
      let num = Number(data[0]);
      for (let j = 2+num%2; j <= num; j+=2){
        let test = j;
        while (test%2 == 0) {
          two++;
          test/=2;
        }
        test = j;
        while (test%5 == 0) {
          five++;
          test/=5;
        }
      }
    }
  }
  return two<five?two:five;
}