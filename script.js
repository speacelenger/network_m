
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
// JavaScript: モーダルの操作
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const captionText = document.getElementById("caption");
  const close = document.querySelector(".close");

  document.querySelectorAll(".img-item img").forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
      captionText.textContent = img.alt; // 画像のalt属性をキャプションに使用
    });
  });

  // モーダルを閉じる
  close.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // モーダル外をクリックしたら閉じる
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});


// window.addEventListener('load', animation);
window.setTimeout( animation, 2000);
