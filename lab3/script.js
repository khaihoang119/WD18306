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

let power = (base, exponent) =>{
    let result = 1;
    for(let i  = 0; i < exponent; i++){
        result *=base;
    }
    return result;
}
console.log(power(2,10));

let greet = (who) => console.log("Hello " + who);
console.log(greet("Hoang"));

//Bài 2
const arr = [1,2,3,4,5,6,7];
let sum = (array) =>{
   let sumArray = array.reduce((total, curentValue) => total + curentValue,0 );
   return sumArray;
}
console.log(sum(arr));

//Bài 3
function Entity(name, delay) {
    this.name = name;
    this.delay = delay;
}
Entity.prototype.greet = function() {
    setTimeout(() => {
        console.log('Xin chào, tên tôi là ', this.name);
    },this.delay);
};
let java = new Entity('Java');
let cpp = new Entity ('C++');
java.greet();
cpp.greet();

//Bài 4
let convertTemperature = (temperature, unit) =>{
    if(unit === "C"){
        return (temperature *9/5)+32 +" C";
    }else if(unit === "F"){
        return (temperature - 32) *5/9 +" F";
    }else{
        console.log("Đơn vị nhiệt độ không hợp lệ. Chỉ nhập 'C' hoặc 'F'.");
        return null;
    }
}
console.log(convertTemperature(30, "C")); 
console.log(convertTemperature(100, "F")); 
console.log(convertTemperature(25, "K")); 
