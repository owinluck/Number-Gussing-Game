
let randomNumber=Math.floor(Math.random()*11)+1;
console.log(randomNumber);
let attempt=0;

function submit(){
    let number=document.getElementById("txtNum").value;
    console.log("Number------> "+number);

    attempt++;
    console.log("Attemt------->"+attempt);
    if(attempt<3){
        if(number==randomNumber){
            document.getElementById("setResult").innerHTML="You Win...congratulations!!!";
        }else{
            if(randomNumber<number){
                document.getElementById("setResult").innerHTML="Less than "+number;
            }else{
                document.getElementById("setResult").innerHTML="More than "+number;
            }
        }
    }else{
        document.getElementById("setResult").innerHTML="You lose the game";
        document.getElementById("lastResult").innerHTML="The Number Was "+randomNumber;
    }
    
}


   
    
