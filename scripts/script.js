const button = document.querySelector(".switch");
const text = document.querySelector(".m1");
const text2 = document.querySelector(".m2");
const text3 = document.querySelector(".m3");

button.addEventListener('click', () => {
    if (text.innerHTML === "$19.99" && text2.innerHTML === "$24.99" && text3.innerHTML === "$39.99") {
        text.innerHTML = "$199.99";
        text2.innerHTML = "$249.99";
        text3.innerHTML = "$399.99";
        button.classList.toggle('before');
      } else {
        text.innerHTML = "$19.99";
        text2.innerHTML = "$24.99";
        text3.innerHTML = "$39.99";
      }
})
