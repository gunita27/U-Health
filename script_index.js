let link=document.querySelector(".link");
let pink=document.querySelector(".pink");
let hoverTL=gsap.timeline();
hoverTL.pause();
hoverTL.to(pink,{width:"calc(100% + 1.3em)",ease:"Elastic.easeOut(0.25)",duration:0.5})
hoverTL.to(pink,{width:"2em",left:"calc(100% - 1.45em)",ease:"Elastic.easeOut(0.25)",duration:0.5})
link.addEventListener("mouseenter",()=>{hoverTL.play();})
link.addEventListener("mouseleave",()=>{hoverTL.reverse();})



const enterWebsiteSpan = document.querySelector('.wrapper .link span');
const curtainAnimation = document.querySelector('.curtain-animation');

enterWebsiteSpan.addEventListener('click', () => {
  gsap.from(".header-conent",{
    duration:3,
    scale:2,
  });
  gsap.to(curtainAnimation, {
    duration: 2,
    y: '-100vh',
    ease: 'power2.inOut'
  });
  // You can also add a delay to remove the curtain after a certain time
  gsap.delayedCall(4, () => {
    curtainAnimation.classList.add('hidden');
  });
});

