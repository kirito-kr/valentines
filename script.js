function popHearts() {
  for (let i = 0; i < 20; i++) {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.bottom = "0px";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 3000);
  }
}

function goToLove() {
  window.location.href = "love.html";
}

function goHome() {
  window.location.href = "index.html";
}

function sayYes() {
  sessionStorage.setItem("valentineAnswer", "yes");
  window.location.href = "excited.html";
}

function sayNo() {
  sessionStorage.setItem("valentineAnswer", "no");
  window.location.href = "why.html";
}

function reasonUgly() {
  sessionStorage.setItem("reason", "ugly");
  window.location.href = "reassure.html";
}

function reasonDontLike() {
  sessionStorage.setItem("reason", "dontLike");
  window.location.href = "reassure.html";
}
