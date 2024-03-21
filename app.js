let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; 
 
const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    medContainer.classList.add("hide");

}

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        if(turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.Disabled = true;
        checkWinner();
    })
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (Winner) => {
    msg.innerText = `Congratulation, Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};


const checkWinner = () => {
    for (let pattern of winPatterns){
        console.log([pattern[0]], [pattern[1]], [pattern[2]]);
        console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);

        let position1Val = boxes[pattern[0]].innerText;
        let position2Val = boxes[pattern[1]].innerText;
        let position3Val = boxes[pattern[2]].innerText;

        if(position1Val !== "" && position2Val !== "" && position3Val !== "") {
            if(position1Val === position2Val && position2Val === position3Val) {
                
                showWinner( position1Val);
            }
        }
    }
};
  
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);



