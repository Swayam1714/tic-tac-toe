let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset");
let msg=document.querySelector(".msg");
let count=0;

let turnO=true;

const patterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>   {
    box.addEventListener("click", ()=>  {
        console.log("clicked");
        if(turnO)   {
            turnO=false;
            box.innerText="O";
            box.style.color="white";
        } 
        else    {
            turnO=true;
            box.innerText="X";
            box.style.color="black";
        }
        count++;
        box.disabled=true;
        winPattern();
        if(count==9)   {
            msg.innerText=`It is a Draw.`;
            msg.classList.remove("hide");
        }
    })
})

let winPattern=()=> {
    for(let pattern of patterns)    {
        let val1=boxes[pattern[0]].innerText;
        let val2=boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;

        if(val1!="" && val2!="" && val3!="")    {
            if(val1===val2 && val2===val3)  {
                console.log("Winner is :- "+val1);
                showWinner(val1);
            }
        }
    }
}

const showWinner=(winner)=>   {
    msg.innerText=`Congratulations, Winner is :- ${winner}`;
    msg.classList.remove("hide");
    disable();
}

const disable=()=>  {
    for(let box of boxes)   {
        box.disabled=true;
    }
}

const enable=()=>   {
    for(let box of boxes)   {
        box.disabled=false;
        box.innerText="";
    }
}

const reset=()=>    {
    turnO=true;
    enable();
    msg.classList.add("hide");
}

resetBtn.addEventListener("click", reset);