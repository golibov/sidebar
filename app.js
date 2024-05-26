const btn = document.querySelector(".btn");
const menuPanel = document.querySelector(".menupanel");

btn.addEventListener("click", ()=>{
     menuPanel.classList.toggle("shrink")
    btn.classList.toggle('show')
    })