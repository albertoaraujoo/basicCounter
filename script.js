


function dec (){
    
    let num = (document.getElementById ("num"))
    let dec = parseInt (num.innerText) 
    num.innerText = dec - 1
   
    let decBC = (document.getElementsByClassName ("cEle3"))
    decBC.style.backgroundColor = "black"
   
}

function inc (){
    
    
    let num = (document.getElementById ("num"))
    let dec = parseInt (num.innerText) 
    num.innerText = dec + 1
    

}

function reset (){

    let num = (document.getElementById ("num"))
    let dec = parseInt (num.innerText) 
    num.innerText = 0


}

function cb(i){

    i.style.backgroundColor = "black"
}