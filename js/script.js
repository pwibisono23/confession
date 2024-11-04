const container = document.querySelector(".content-box");
const question = document.querySelector(".main-text");
const clickMe = document.querySelector(".next-btn");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const decision = document.querySelector(".decision");
const decisionMain = document.querySelector(".decision-main");

const containerRect = container.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

clickMe.addEventListener("click", () => {
  question.innerHTML =
    "Aku udah suka sama kamu dari lama, kamu mau gak jadi pacar aku?";
  decision.style.display = "none";
  decisionMain.style.display = "flex";
});

yesBtn.addEventListener("click", () => {
  question.innerHTML = "I Love You 💗";
  decision.style.display = "none";
  decisionMain.style.display = "none";
});

noBtn.addEventListener("mouseover", () => {
  const i =
    Math.floor(Math.random() * (containerRect.width - noBtnRect.width)) + 1;
  const j =
    Math.floor(Math.random() * (containerRect.height - noBtnRect.height)) + 1;

  noBtn.style.left = i + "px";
  noBtn.style.top = j + "px";
});

/*
<div class="decision" id="decision">
          <button class="yes-btn" id="yes-btn">
            <span>Aku Mau</span>
          </button>
          <button class="no-btn" id="no-btn">
            <span>Temenan aja ya</span>
          </button>
        </div>
**/
