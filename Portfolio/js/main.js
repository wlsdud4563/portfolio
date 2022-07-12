$(".title").lettering();

$(document).ready(function(){
    animation();
},500);



function animation() {
    let title1 = new TimelineMax();
    //title1.to(".button", 0, {visibility: 'hidden', opacity: 0})
    title1.staggerFromTo(".title span", 0.5, 
    {ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
    {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05);
    //title1.to(".button", 0.2, {visibility: 'visible' ,opacity: 1})
  }

  const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
  cursor.setAttribute("style", "top: "+(e.pageY-15)+"px; left: "+(e.pageX-20)+"px;")
})

//Add on click pulse effect
function clickEffect(e){
  var effect = document.createElement("div");
  effect.className="cursoreffect";
  effect.setAttribute("style", "top: "+(e.pageY-16)+"px; left: "+(e.pageX-21)+"px;")
  document.body.appendChild(effect);
  effect.addEventListener('animationend',function(){effect.parentElement.removeChild(effect);}.bind(this));
}
document.addEventListener('click',clickEffect);

const buttons = document.querySelectorAll(".concard-buttons button");
const sections = document.querySelectorAll(".concard-section");
const card = document.querySelector(".concard");

const handleButtonClick = e => {
  const targetSection = e.target.getAttribute("data-section");
  const section = document.querySelector(targetSection);
  targetSection !== "#about" ?
  card.classList.add("is-active") :
  card.classList.remove("is-active");
  card.setAttribute("data-state", targetSection);
  sections.forEach(s => s.classList.remove("is-active"));
  buttons.forEach(b => b.classList.remove("is-active"));
  e.target.classList.add("is-active");
  section.classList.add("is-active");
};

buttons.forEach(btn => {
  btn.addEventListener("click", handleButtonClick);
});


$('.videobox .flip, .videobox2 .flip').on('click',function(e){
  e.preventDefault();

  $('.view').fadeIn();

  let key = $(this).find('mark').text();
  let src = `<iframe width="1280" height="720" src="https://www.youtube.com/embed/${key}" title="고메네 수제간식 풀영상❣" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;


$('.view').find('figure').html(src);

});


$('.view button, .view .closeWrap').on('click',function(){


  $('.view').fadeOut();
  $('.view figure').html('');

});