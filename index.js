let ask = 0
let container = document.getElementById("container") 
startGame()

function startGame(){
    container.querySelectorAll('*').forEach(n => n.remove());  
    ask = window.prompt("Enter a number between 0-100");
    if(parseInt(ask)>0 && parseInt(ask) <=100){
    } else {
        alert("Not a valid entry. Starting with 100")
        ask = 100;
    }
    next()
}

function next(){ 
    container.querySelectorAll('*').forEach(n => n.remove()); 
    for(let x = 0; x< ask; x++){
        let div = document.createElement("div");
        div.className = "row";
        div.id = "row"+x
        document.getElementById("container").appendChild(div);
        for(let y = 0; y< ask; y++){
            let box = document.createElement("div");
            box.className = "col";
            box.addEventListener("mouseover", function(e){
               e.target.style.backgroundColor = "black"
            });
            document.getElementById("row"+x).appendChild(box);   
        }
    } 
    
}

