//Bài 1

let multiply = (num1,num2) => num1 + num2;
//Kiểm tra
console.log(multiply(1,2));

let toCelsius = (fahrenheit) => (5/9) * (fahrenheit - 32);
//Kiểm tra
console.log(toCelsius(50));

let padZero = (num, totalLen) =>{
    let numStr = num.toString();
    numZero = totalLen - numStr.length;
    for (let i = 0; i < numZero; i++) {
        numStr = "0"+  numStr; 
    } 
    return numStr;
}
console.log(typeof(padZero(2,1)));
console.log(padZero(10,2));
                                    