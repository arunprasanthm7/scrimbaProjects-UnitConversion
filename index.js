let inpValue = document.getElementById('inputValue');

let convertBtn = document.getElementById('convertBtn');
let getValue0=document.getElementById('clear0');
let getValue1=document.getElementById('clear1');
let getValue2=document.getElementById('clear2');
let getValue3=document.getElementById('clear3');
let getValue4=document.getElementById('clear4');
let getValue5=document.getElementById('clear5');
let value0=document.getElementById('values0');
let value1=document.getElementById('values1');
let value2=document.getElementById('values2');
let value3=document.getElementById('values3');
let value4=document.getElementById('values4');
let value5=document.getElementById('values5');

convertBtn.addEventListener('click', () => {
  let value = inpValue.value;
  // let count=4;
  // for(i=0;i>count;i++)
  // {
  //  let res =`getValue ${i}.innerHTML=${value};`
  //   console.log(res);
  // }
    getValue0.innerHTML=value;
    getValue1.innerHTML=value;
    getValue2.innerHTML=value;
    getValue3.innerHTML=value;
    getValue4.innerHTML=value;
    getValue5.innerHTML=value; 
    value0.innerHTML=value*3.28084;
    value1.innerHTML=value*0.3048;
    value2.innerHTML=value*0.264172;
    value3.innerHTML=value*3.78541;
    value4.innerHTML=value*2.20462;
    value5.innerHTML=value*0.453592; 
});
