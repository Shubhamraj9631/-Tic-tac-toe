let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newGamebtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let trun0=true;// playsx,plays0

//  arrya used for for match the catergorgy
let winPatterns= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
   
    ];

     const resetGame=()=>{
        trun0=true;
        enableBoxes();
        msgContainer.classList.add("hide");

     };


    boxes.forEach((box) => {
         box.addEventListener("click",() =>{
        //    conditon
        if(trun0){ //player0 ke turn hai
            box.innerText="O";
            trun0=false;
            
        } else { //playerX ke turn hai
            box.innerText="X";
            trun0=true;
        }
        box.style.pointerEvents = "none";
        checkWinner();
         });
    });


    const disableBoxes = () => {
        for (let box of boxes) {
            // box.disabled = true;
            box.style.pointerEvents = "none";
             
        }
    };

    const enableBoxes = () => {
        for (let box of boxes) {
            box.style.pointerEvents = "none";
            box.innerText="";
             
        }
    };


    const showWinner = (winner)=> {
        msg.innerText=`Congratulations,winner is  ${winner}`;
        msgContainer.classList.remove("hide");
        disableBoxes();
    }
    const checkWinner=() =>{
         for (let pattern of winPatterns){
            let pos1Val=boxes[pattern[0]].innerText;
            let pos2Val=boxes[pattern[1]].innerText;
            let pos3Val=boxes[pattern[2]].innerText;
             
            if(pos1Val!="" && pos2Val!="" && pos3Val !=""){
                if(pos1Val===pos2Val && pos2Val===pos3Val){
                    showWinner(pos1Val);
                }
            }
         }

    }

    // resset Game and Start new Game
    newGamebtn.addEventListener("click" ,resetGame );
    resetbtn.addEventListener("click",resetGame);