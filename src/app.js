const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const loveMessage = document.getElementById("love-message");

noBtn.addEventListener("click", function() {
  noBtn.style.position = "absolute";
  noBtn.style.top = Math.random() * (window.innerHeight - noBtn.offsetHeight) + "px";
  noBtn.style.left = Math.random() * (window.innerWidth - noBtn.offsetWidth) + "px";
});

yesBtn.addEventListener("click", function() {
  noBtn.classList.add("hidden");
  loveMessage.classList.remove("hidden");
  setTimeout(() => {
    window.location.href = "https://api.whatsapp.com/send?l=pt-BR&phone=5548998443415&text=Eu%20tamb%C3%A9m%20te%20amo%2C%20Victor.%20Voc%C3%AA%20%C3%A9%20lindo.";
  }, 3000);
});
