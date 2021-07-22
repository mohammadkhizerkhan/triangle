const inputSides= document.querySelectorAll(".inputSide");
        let lengthA, lengthB;
        const formHyp = document.querySelector("#formHyp");
        const hypotenuse= document.querySelector(".hypShowHere");
        formHyp.addEventListener('submit', (e)=>{
            e.preventDefault();
            lengthA = Number(inputSides[0].value);  
            lengthB = Number(inputSides[1].value);  
            
            hypotenuse.innerText = Math.sqrt((lengthA*lengthA) + (lengthB*lengthB));
            
        })