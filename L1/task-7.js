function getNum1(){
    console.log(1);
}
function getNum2(){
    console.log(2);
}
function getNum3(){
    console.log(3);
}
function getNum4(){
    console.log(4);
}
function getNum5(){
    console.log(5);
}

const functionsArray = [getNum1,getNum2,getNum3,getNum4,getNum5];

for (let i = 0; i < functionsArray.length; i++) {
    functionsArray[i](); // Вызываем функцию из массива
    console.log("Порядковый номер функции: " + i);
}
