let displayer=document.getElementById("displayer");

const typeButtons=document.querySelectorAll("#calculator button.calc-button");

typeButtons.forEach(button=>button.addEventListener('click',function()
{
displayer.value+=button.value;
}));

const buttonKeys=Array.from(typeButtons).map(button=>button.value)
document.addEventListener("keypress",function(e)
{

if(buttonKeys.includes(e.key))
{
displayer.value+=key;
}
})


////mias kai den mou to metrhsei thn prwth fora to pernaw manual
///gia ola ta buttons exw kanei bind ta keys sto plhkrtologio,

document.addEventListener("keypress",(e)=>
{
if(e.key==="+"||e.key==="-"||e.key==="*"||e.key==="/")
{
displayer.value+=key;
}
});





function calculator(displayer)
{
let expression=displayer.value;
let exp_array=[];
let separetedNumber="";
////////////edw gemizw  to exp_array me thn metavlhth separetedNumber h opoia pros to
////paron einai ws String ,louparw to expreesion string kai ka8e tou stoixeio to apo8eikeuw
/// sthn sepatetedNumber mexri na bre8ei operator , ekei tha to kanw push sto exp_array
//kai tautoxrona kanw push kai to digit(operator),telos gia na mhn fame to bug tou aiwna :DDD
///3anapusharoume thn separetedNumber akoma mia fora ,giati h logikh ths prwths mou for
//den htan arketh gia na sprw3ei ta teleftea mou digits afou to push ginetai gia tous ari8mous
//prin ton operator,epishs otan ta sproxnw ta metatrepw se numbers giati apo to input ta lamvanoume
///ws string!

for(let i=0;i<expression.length;i++)
{
let digit=expression[i];

if(digit.match(/[0-9]/))
{  
    separetedNumber+=digit;
}
else if(digit.match(/[+\-\*\/]/))
    {   
        if(separetedNumber!=="")
        {
        exp_array.push(Number(separetedNumber));
        separetedNumber="";
        }
        exp_array.push(digit);
    }}

if (separetedNumber !== "")
    {
    exp_array.push(Number(separetedNumber));
    }
    
/////////////////edw 3ekinaei h logikh gia tis swstes(me thn seira algebrikes pra3eis)//
////////////////Ousiastika ginetai h pra3h kai to sugkekrimeno operator antika8istate me thn
///zhtoumenh timh , enw to prohgoumeno kai to epomeno stoixeio pernoun podi apo thn lista //
////efoson pleon den mas xreiazontai 
 
for(let i=0;i<exp_array.length ;i++)
{
if(exp_array[i]==="*")
{
exp_array[i]=exp_array[i-1]*exp_array[i+1];
exp_array.splice(i-1,1);
exp_array.splice(i+1,1);
}}

for(let i=0;i<exp_array.length;i++)
{
if(exp_array[i]==="/")
{
exp_array[i]=exp_array[i-1] / exp_array[i+1];
exp_array.splice(i-1,1);
exp_array.splice(i+1,1);
}}

for(let i=0;i<exp_array.length;i++)
{
if(exp_array[i]==="+")
{
exp_array[i]=exp_array[i-1]+exp_array[i+1];
exp_array.splice(i-1,1);
exp_array.splice(i+1,1);
}}

for(let i=0;i<exp_array.length;i++)
{
    if(exp_array[i]==="-")
    {
    exp_array[i]=exp_array[i-1]-exp_array[i+1];
    exp_array.splice(i-1,1);
    exp_array.splice(i+1,1);
    }}
    return displayer.value=exp_array[0];
}

const resultButton=document.getElementById('=');
const backButton=document.getElementById("back");
const resetButton=document.getElementById("reset");

resultButton.addEventListener('click',function()
{
calculator(displayer);
});

backButton.addEventListener('click',function()
{
let context=displayer.value;
return displayer.value=context.slice(0,-1);
});
resetButton.addEventListener("click",function()
{
return displayer.value="";
});


document.addEventListener('keydown',(e)=>
{
if(e.key==="Backspace")
{
let context=displayer.value;
 displayer.value=context.slice(0,-1);
}
})

document.addEventListener('keyup',(e)=>
{
if(e.key==="Enter")
{
calculator(displayer);
}
})
