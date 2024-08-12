import * as wmRoot from "./modules/root.js";
import * as wmFunctions from "./modules/functions.js";

wmRoot.isWebp();
wmRoot.project();

const steps = document.querySelectorAll(".step");
const progress = document.getElementById("progress");
const nextBtn = document.getElementById("next");
const stepsContent = document.querySelectorAll(".step-content");
const nextBtnText = document.querySelector(".box-down__button-text");

let currentStep = 1;
let selectedOption = 0;

nextBtn.addEventListener("click", () => {
  if (currentStep === 4) {
    const selectedRadio = document.querySelector(
      'input[name="product"]:checked'
    );
    if (!selectedRadio) {
      alert("Будь ласка, виберіть опцію перед тим, як продовжити.");
      return;
    }
    selectedOption = selectedRadio.value;
  }

  if (currentStep < 5) {
    if (currentStep === 4) {
      currentStep = 5;
    } else {
      currentStep++;
    }

    if (currentStep === 5) {
      if (selectedOption === "1") {
        nextBtn.disabled = true;
        nextBtnText.textContent = "Продовжити";
      } else if (selectedOption === "2" || selectedOption === "3") {
        nextBtnText.textContent = "Ще раз";
        nextBtn.addEventListener("click", resetToStepThree);
      }
    }
  
    updateProgress();
  }
});

function resetToStepThree() {
  currentStep = 4;
  updateProgress();
  nextBtnText.textContent = "Продовжити";
  nextBtn.removeEventListener("click", resetToStepThree);
}

function updateProgress() {
  steps.forEach((step, index) => {
    if (index <= currentStep - 1) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });

  stepsContent.forEach((content) => {
    content.classList.remove("active");
  });

  if (currentStep === 5) {
    // Показуємо відповідний контент для кроку 5 залежно від вибору
    document
      .getElementById(`step-content-5-${selectedOption}`)
      .classList.add("active");
  } else {
    document
      .getElementById(`step-content-${currentStep}`)
      .classList.add("active");
  }

  const footerContents = document.querySelectorAll(".box-down__left-content");
  footerContents.forEach((footerContent) => {
    footerContent.classList.remove("active");
  });

  document.getElementById(`footer-step-${currentStep}`).classList.add("active");

  const totalSteps = 5; // Загальна кількість кроків
  const progressWidth = (currentStep / totalSteps) * 100;
  progress.style.width = `${progressWidth}%`;
}
