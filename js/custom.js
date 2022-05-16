let zero = document.querySelector(".zero");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let equal = document.querySelector(".equal");
let gun = document.querySelector(".gun");
let plus = document.querySelector(".plus");
let bug = document.querySelector(".bug");
let minas = document.querySelector(".minas");
let clear = document.querySelector(".clear");
let dosomik = document.querySelector(".dosomik");
let input = document.querySelector("input");

zero.addEventListener("click",() => {

    input.value += zero.innerHTML;
        
})

one.addEventListener("click",() => {

    input.value += one.innerHTML;
        
})

two.addEventListener("click",() => {

    input.value += two.innerHTML;
        
})

three.addEventListener("click",() => {

    input.value += three.innerHTML;
        
})

four.addEventListener("click",() => {

    input.value += four.innerHTML;
        
})

five.addEventListener("click",() => {

    input.value += five.innerHTML;
        
})

six.addEventListener("click",() => {

    input.value += six.innerHTML;
        
})

seven.addEventListener("click",() => {

    input.value += seven.innerHTML;
        
})


eight.addEventListener("click",() => {

    input.value += eight.innerHTML;
        
})

nine.addEventListener("click",() => {

    input.value += nine.innerHTML;
        
})

dosomik.addEventListener("click", () => {
    input.value += dosomik.innerHTML;
})

plus.addEventListener("click",() => {

    if(signChek() == false){
        input.value += plus.innerHTML;
    }
        
})
minas.addEventListener("click",() => {

    if(signChek() == false){
        input.value += minas.innerHTML;
    }
        
})

gun.addEventListener("click",() => {

    if(signChek() == false){
        input.value += gun.innerHTML;
    }
           
})

bug.addEventListener("click",() => {

    if(signChek() == false){
        input.value += bug.innerHTML;
    }
        
})

equal.addEventListener("click",() => {

    if( input.value == " "){
       input.value = ""
    }else{
        let result = eval(input.value)
         input.value = result;
    }
        
})

clear.addEventListener("click",() => {

    input.value = " ";
        
})

function signChek(){
    if(input.value[input.value.length - 1] == "+" ||
    input.value[input.value.length - 1] == "-" ||
    input.value[input.value.length - 1] == "*" || 
    input.value[input.value.length - 1] == "/"
    ){
        return true;
    }
    else{
        return false;
    }
}





