
document.body.addEventListener('keydown' , event=>{
    console.log(event.key); 
    event.key = "Enter" ?  closePop() : null ;
})


document.querySelector(`.menu`).addEventListener('click' , ()=>{
    document.querySelector(".menu").style.display = "flex" ? closePop() : null
})
// menubar functionalities 
function closePop() {
document.querySelector(".menu").style.display = "none";
}
function openPop() {
document.querySelector(".menu").style.display = "flex";
}

