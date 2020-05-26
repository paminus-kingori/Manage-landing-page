// mobile menu
const iconHolder = document.getElementById('icon-holder');
const ham = document.querySelector('#icon-ham');
const close = document.querySelector('#icon-close');
const links = document.querySelector('#links');
const overlay = document.getElementById('overlay');


iconHolder.addEventListener('click',function(){
     ham.classList.toggle('none');
     close.classList.toggle('click');  
     overlay.classList.toggle('click'); 
     links.classList.toggle('click');
     //links.style.display = 'flex';
});



// hover actions
const fb = document.getElementById('fb');
const yu = document.getElementById('yu');
const twi = document.getElementById('twi');
const pin = document.getElementById('pin');
const insta = document.getElementById('insta');
let redIcons = ["images/fb-red.svg","images/yu-red.svg","images/twi-red.svg","images/pin-red.svg","images/insta-red.svg"];
// fb.addEventListener('onMouseOver',function(){
//      console.log('yepee');
// });

function fbFtn(){
    fb.src = redIcons[0];
}
function removeFb(){
fb.src = "images/icon-facebook.svg";
}
function yuFtn(){
     yu.src = redIcons[1];
}
function removeYu(){
     yu.src ="images/icon-youtube.svg";
}
function twiFtn(){
     twi.src = redIcons[2];
}
function removeTwi(){
     twi.src ="images/icon-twitter.svg";
}
function pinFtn(){
     pin.src = redIcons[3];
}
function removePin(){
     pin.src ="images/icon-pinterest.svg";
}
function instaFtn(){
     insta.src = redIcons[4];
}
function removeInsta(){
     insta.src ="images/icon-instagram.svg";
}

//creating the slider
const holder = document.querySelector('#person-holder');
const people = document.querySelectorAll('.person');

//circles
const dots = document.querySelectorAll('.dot');
let i =0;

//buttons
const next = document.querySelector('#nextBtn');
const prev = document.querySelector('#prevBtn');

counter = 1;
const size = people[0].clientWidth;

slider(counter);
circleFill();

function slider(x){
     holder.style.transform = 'translateX('+ (-size * x) +'px)';
}
function moveForward(){
     if(counter>=people.length-1) return;
     console.log('mbele');
     holder.style.transition = "transform 0.4s ease-in-out";
     counter++;
     slider(counter);
     circleFill();
    remNext();
}
function moveBackward(){
     if(counter<=0) return;

     holder.style.transition = "transform 0.4s ease-in-out";
     counter--;
     slider(counter);
     circleFill();
     remPrev();
}

// making the loop
holder.addEventListener('transitionend',function(){
if(people[counter].id==='CloneLast'){
     holder.style.transition = 'none';
     counter = people.length - 2;
     slider(counter);
     circleFill();
         dots[0].classList.remove('background');
}
if(people[counter].id==='CloneFirst'){
     holder.style.transition = 'none';
     counter = people.length - counter;
     slider(counter);
     circleFill();
     dots[3].classList.remove('background');
}
});


     
     function circleFill(){
         if(counter==1){
             i = 0;
         }
         if(counter==2){
             i = 1;
         }
         if(counter==3){
             i=2;
         }
         if(counter==4){
             i=3;
         }
         if(counter==5){
             i = 4;
         }
         console.log(i);

         dots[i].classList.add('background');
         
     }
     function remNext(){
         dots[i-1].classList.remove('background');
     }
     function remPrev(){
         dots[i+1].classList.remove('background');
     }
     

next.addEventListener('click',moveForward);
prev.addEventListener('click',moveBackward);