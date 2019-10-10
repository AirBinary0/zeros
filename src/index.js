module.exports = function zeros(expression) {
  let result = '1';
  let arr = expression.split('*');
  for (let i = 0; i < arr.length; i++) {
    let data = arr[i].split('!');
    if (data.length == 2) result = multiply(result, zeros_factorial(Number(data[0])));
    if (data.length == 3) result = multiply(result, zeros_half_factorial(Number(data[0])));
  }
  result = get_zeros(result);
  let ans =  result.length-1;
  return ans;
}
// This function calc and return n!
function zeros_factorial(n) {
  let result = '1';
  for (let i = 2; i <= n; i++) {
    result = multiply(result,i.toString());
  }
  return result;
}
// This function calc half factorial: n!!
// If n%2==1 return 1*3*5*...*n;
// else      return 2*4*6*...*n;
function zeros_half_factorial(n) {
  let result = '1';
  for (let i = 2-n%2; i <= n; i+=2) {
    result = multiply(result,i.toString());
  }
  return result;
}

function get_zeros(result) {
    for (let i = result.length-1; i >= 0; i--)
    {
      if (result[i] == '0') continue;
      else {
        return result.substr(i);
      }
    }
}
// This function from multiply task
function multiply(first, second) {
  let col = 0;
  let f_arr = Array.from(first);
  let s_arr = Array.from(second);
  let sum_arr = [];
  for (let i=f_arr.length-1; i>=0; i--) {
    let memory = 0;
    let number = '';
    for (let i=0; i<col; i++) number += "0";
    for (let j=s_arr.length-1; j>=0; j--) {
      let a = Array.from(Number(Number(f_arr[i])*Number(s_arr[j])+memory).toString());
      if (a.length > 1) {number += a[1]; memory = Number(a[0]);}
      else {number += a[0]; memory = 0;}
    }
    if (memory > 0) number += memory.toString();
    sum_arr.push(number);
    col++;
  }
  let result = sum_arr[sum_arr.length-1];
  let memory = 0;
  for (let i=sum_arr.length-2; i>=0; i--) {
    let pre_res = '';
    let sc = sum_arr[i];
    while (sc.length < result.length) sc += "0";
    for (let j = 0; j < result.length; j++) {
      let a = Array.from(Number(Number(result[j])+Number(sc[j])+memory).toString());
      if (a.length > 1) {pre_res += a[1]; memory = Number(a[0]);}
      else {pre_res += a[0]; memory = 0;}
    }
    if (memory > 0) pre_res += memory.toString();
    memory = 0;
    result = pre_res;
  }
  let ans = Array.from(result).reverse();
  result = '';
  for (let i=0; i<ans.length; i++) result += ans[i];
  return result;
}