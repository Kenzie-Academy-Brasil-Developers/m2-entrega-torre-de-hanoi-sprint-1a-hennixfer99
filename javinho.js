let dif = 0
const modal = document.querySelector(".victory")
let teste = false
let movimento 
let contagem = 0;
const exit = document.querySelector(".exit")

exit.addEventListener("click", () => {
    modal.style.display = "none"
})


//torres
const torres = document.getElementsByClassName("torres")

for(let i = 1; i < 4; i++){


    let torre = document.createElement("div")


torre.classList.add("torre" + i)

torres[0].appendChild(torre)

}
const torre1 = document.querySelector(".torre1")
const torre2 = document.querySelector(".torre2")
const torre3 = document.querySelector(".torre3")
torre1.addEventListener("click", (event) => {
    
    // let movimento = event.currentTarget.lastElementChild
    // torre2.appendChild(movimento)    
    if(teste === false){
        teste = true
        movimento = event.currentTarget.lastElementChild
        contagem+=1
    }else{
        
        if(event.currentTarget.lastElementChild !== null){
          if(movimento.clientWidth < event.currentTarget.lastElementChild.clientWidth){
            torre1.appendChild(movimento)
            teste = false
        }else{
            teste = false
        }
        
    }else{
        
        torre1.appendChild(movimento)
        teste = false
    }
}
vitoria()
        })
torre2.addEventListener("click", (event) => {

    if(teste === false){
        teste = true
        movimento = event.currentTarget.lastElementChild
       
        contagem+=1
    }else{
        
        if(event.currentTarget.lastElementChild !== null){
          if(movimento.clientWidth < event.currentTarget.lastElementChild.clientWidth){
            torre2.appendChild(movimento)
            teste = false
        }else{
            teste = false
        }
        
    }else{
        
        torre2.appendChild(movimento)
        teste = false
    }
}
vitoria()
        })

torre3.addEventListener("click", (event) => {

    if(teste === false){
        teste = true
        movimento = event.currentTarget.lastElementChild
        contagem+=1
    }else{
       
        if(event.currentTarget.lastElementChild !== null){
          if(movimento.clientWidth < event.currentTarget.lastElementChild.clientWidth){
            torre3.appendChild(movimento)
            teste = false
        }else{
            teste = false
        }
        
    }else{
        
        torre3.appendChild(movimento)
        teste = false
    }
}
vitoria()
})


//botões de dificuldade
//easy
const dificuldade = document.getElementById("buttons")
const dif1_button = document.createElement("button");
dificuldade.appendChild(dif1_button)
    dif1_button.addEventListener("click", () => {

    dif = 4
    
    return discos()
    
})

dif1_button.innerText = "Easy";

//medium
const dificuldade2 = document.getElementById("buttons")
const dif2_button = document.createElement("button");
dificuldade2.appendChild(dif2_button)
   dif2_button.addEventListener("click", () => {
       
    dif = 5
    return discos()
})

dif2_button.innerText = "Medium";

//Hard
const dificuldade3 = document.getElementById("buttons")
const dif3_button = document.createElement("button");
dificuldade3.appendChild(dif3_button)
  dif3_button.addEventListener("click", () => {
    
    dif = 6
    return discos()
})

dif3_button.innerText = "Hard";

//discos
function discos(){

    torre1.innerHTML = ""
    torre2.innerHTML = ""
    torre3.innerHTML = ""

    for(let i = 0; i < dif; i++){

        let disco = document.createElement("div")
        
        disco.classList.add("disco" + i)


        torre1.appendChild(disco)
    }

}
const diffs = document.getElementsByClassName("buttons")

//Botão de reset
const teste1 = document.getElementById("Comeco")
const start_button = document.createElement("button");
    teste1.appendChild(start_button)
    start_button.addEventListener("click", () => {

    torre1.innerHTML = ""
    torre2.innerHTML = ""
    torre3.innerHTML = ""
    modal.style.display = "none"


})

start_button.innerText = "Restart";

//tela de vitória

function vitoria(){
if(torre3.childElementCount === dif){
    modal.style.display = "block"
}


}

