const formTriangle = document.querySelector('#formTriangle');
const inputAngles = document.querySelectorAll('.angleIn');
const outputDiv= document.querySelector('#isTriangle');

let anglesarr=[];


document.addEventListener('submit',formTriangleHandler);

function formTriangleHandler(e){
    e.preventDefault();

    for(i=0; i<inputAngles.length; i++){
        anglesarr[i] = Number(inputAngles[i].value);
    }
    
    let sum=0;
    anglesarr.map((angle)=>{
        sum=sum+angle;
    })

    if(sum ===180){
        outputDiv.innerText = "The above angles can make a triangle";
    }
    else{
        outputDiv.innerText = "Oops!!! The above angles can't make a triangle";
    }
}