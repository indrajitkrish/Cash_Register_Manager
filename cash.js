const billAmount = document.querySelector(".billamount");
const cashGiven = document.querySelector(".cashgiven");
const checkButton = document.querySelector(".checkbutton");
const error=document.querySelector(".errormessage");
const noOfNotes=document.querySelectorAll("#no-of-note")
const nextButton = document.querySelector(".nextbutton");
const hide = document.querySelector(".hidenext");

const denominations=["2000","500","100","50","20","10","1"];

hide.style.display="none";
nextButton.addEventListener("click",function show(){
hide.style.display="block";
checkButton.addEventListener("click",function calculateAmount(){
    error.style.display="none";
    //console.log(billAmount.value);
    //console.log(cashGiven.value);
    if(billAmount.value>0)
    {
       if(Number(cashGiven.value) >= Number(billAmount.value)){
        var amountBalance = cashGiven.value - billAmount.value ;
        //console.log(amountBalance);
        for(var i=0;i<denominations.length ;i++)
        {
             count = Math.trunc(amountBalance/denominations[i]);
             amountBalance=amountBalance%denominations[i];
             noOfNotes[i].innerHTML=count;
        }
       }
       else{
        errorMessage("Give enough Cash Amount");
       }
    }
    else{
        errorMessage("Invalid Amount");
    }
});
});

function errorMessage(msg)
{
    error.style.display="block";
    error.innerHTML=msg;
}
