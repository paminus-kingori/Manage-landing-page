let image = document.getElementById('image');
const hamb = document.getElementById('ham');
const overlay = document.getElementById('overlay');
let icons = ["images/icon-close.svg","images/icon-hamburger.svg"];

hamb.addEventListener('click',function(){
     console.log("jeh"); 
});
image.src = icons[0];

console.log(icons);
console.log(ham);

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