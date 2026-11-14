let name: string = "Hirut";
console.log(name);
let antal1: number = 4;
let antal2: number = 5;
let summa: number = antal1 + antal2;
console.log(summa);
if(antal1 > 10 || antal2 > 10){
    console.log("Större än 10");
}else{
    console.log("Mindre än 10");
}

for(let i: number = 1; i<=5; i++)
{
    console.log(i);
}

function double(value){
    return value * 2;
}
console.log(double(10))