const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');
//END SECTION
const section = document.querySelector('section');
const end = section.querySelector('h1');

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
     duration: 20000,
     triggerElement: intro,
     triggerHook: 0
})
 .setPin(intro)
 .addTo(controller);



 let accelamount = 0.5;
 let scrollpos = 0;
 let delay = 0;

 scene.on("update", e => {
     scrollpos = e.scrollPos / 1000;
 });

 setInterval(() => {
     delay += (scrollpos - delay) * accelamount;
     console.log(scrollpos, delay);

     video.currentTime = delay;
 }, 33.3);



 