
const items = document.querySelectorAll('.img-item');
console.log(items);

console.log(items.length);

// for文
for(let i = 0; i < items.length; i++){

  const keyframes = {
    opacity: [0, 1],
    translate: ['0 50px', 0],
    filter: ['blur(10px)', 'blur(0)'],
    delay: i * 400,
  };
  
  const options = {
    duration: 600,
    delay: i * 400,
    fill: 'forwards',
  };

  items[i].animate(keyframes, options);
}
// JavaScript

const loading = document.getElementById('loading');

function animation(){
  loading.classList.add('loaded');
}

// window.addEventListener('load', animation);
window.setTimeout( animation, 2000);
