
const footer1=document.getElementById("footer1");
const footer2=document.getElementById("footer2");
const btn1=document.getElementById("btn");
const btn2=document.getElementById("btn2");


btn1.addEventListener("click",()=>{
    footer1.style.display="none";
    footer2.style.display="flex"
})
btn2.addEventListener("click",()=>{
    footer1.style.display="flex";
    footer2.style.display="none"
})



