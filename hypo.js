        const inputSides= document.querySelectorAll(".inputSide");
        let a, b;
        const formHyp = document.querySelector("#formHyp");
        const hypotenuse= document.querySelector(".hypShowHere");
        
        formHyp.addEventListener('submit', (e)=>{
            e.preventDefault();
            a = Number(inputSides[0].value);  
            b = Number(inputSides[1].value);  
            
            hypotenuse.innerText = Math.sqrt((a*a) + (b*b));
            
        })