let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGamebtn = document.querySelector("#new-btn");
let newMsg = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

let winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resumeGame = () =>{
    turnO = true;
    enableBox();   
    newMsg.classList.add("hide");    
};

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("Box was clicke");
        
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
    
        checkWinner();
    });
});

const enableBox = () =>{
    for(let box of boxes){
        box.disabled = true;
        box.innerText = "";
    }
    
};


const disableBox = () =>{
    for(let box of boxes){
        box.disabled = true;
    }

};
const showWinner = (winner) =>{
    msg.innerText = `Congratulations,winner is ${winner}`;
    newMsg.classList.remove("hide");
    disableBox();
};

const checkWinner = () =>{
    for (let pattern of winPattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        
        if(pos1val != "" && pos2val != "" && pos3val != "")
        {
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("Winner");
                showWinner(pos1val);
            }
        }
    }
};

newGamebtn.addEventListener("click",resumeGame);
reset.addEventListener("click",resumeGame);
