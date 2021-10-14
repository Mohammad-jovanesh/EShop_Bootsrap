
//Scroll Section
const HeaderHight=document.querySelector("nav").getBoundingClientRect().height;
var scroll = new SmoothScroll('.nav-item a[href*="#"]',{
    speed: 500,
	speedAsDuration: true,
    offset:HeaderHight
});



//Timer Section codes
const Contents=document.querySelectorAll(".Timer h2")
const date=new Date()
const TheTimer=()=>{
const TimeNow = new Date();
const nextTime =new Date("20 oct 2021");
let DifTime=nextTime-TimeNow
let Days=Math.floor(DifTime/1000/60/60/24)
let Hr=Math.floor((DifTime/1000/60/60)%24)
let Min=Math.floor((DifTime/1000/60)%60)
let Sec=Math.floor((DifTime/1000)%60)
Contents[0].innerHTML=Days
Contents[1].innerHTML=Hr
Contents[2].innerHTML=Min
Contents[3].innerHTML=Sec

}
setInterval(()=>{
    TheTimer()
},1000)



// Scroll Top 
const TopScroll=document.querySelector(".scroll_top i");
window.addEventListener("scroll",(e)=>{
    if(window.scrollY>500){
        TopScroll.style.display="block"
    }else TopScroll.style.display="none"
})

TopScroll.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
})