import * as wmRoot from "./modules/root.js";
import * as wmFunctions from "./modules/functions.js";

wmRoot.isWebp();
wmRoot.project();

document.addEventListener('DOMContentLoaded', function() {
  const steps = document.querySelectorAll('.step-content');
  const footers = document.querySelectorAll('.box-down__left-content');
  let currentStep = 1; // Починаємо з першого блоку

  document.getElementById('next').addEventListener('click', function() {
    console.log("first")
      // Зняти клас active з усіх блоків step-content
      steps.forEach(step => step.classList.remove('active'));
      // Додати клас active до поточного блоку step-content
      steps[currentStep].classList.add('active');

      // Зняти клас active з усіх блоків box-down__left-content
      footers.forEach(footer => footer.classList.remove('active'));
      // Додати клас active до поточного блоку box-down__left-content
      footers[currentStep].classList.add('active');

      // Збільшити currentStep на 1, щоб перейти до наступного блоку
      currentStep++;

      // Якщо дійшли до останнього блоку, можна скинути лічильник або припинити збільшення
      if (currentStep >= steps.length) {
          currentStep = 0; // Це для скидання до початку, або замініть на іншу логіку
          // Якщо не потрібно повертатись на початок, можна просто не збільшувати currentStep далі
          // currentStep = steps.length - 1;
      }
  });
});



// const steps = document.querySelectorAll(".step");
// const progress = document.getElementById("progress");
// const nextBtn = document.getElementById("next");
// const stepsContent = document.querySelectorAll(".step-content");
// const nextBtnText = document.querySelector(".box-down__button-text");

// let currentStep = 1;
// let selectedOption = 0;

// nextBtn.addEventListener("click", () => {
//   if (currentStep === 4) {
//     const selectedRadio = document.querySelector(
//       'input[name="product"]:checked'
//     );
//     if (!selectedRadio) {
//       alert("Будь ласка, виберіть опцію перед тим, як продовжити.");
//       return;
//     }
//     selectedOption = selectedRadio.value;
//   }

//   if (currentStep < 5) {
//     if (currentStep === 4) {
//       currentStep = 5;
//     } else {
//       currentStep++;
//     }

//     if (currentStep === 5) {
//       if (selectedOption === "1") {
//         nextBtn.disabled = true;
//         nextBtnText.textContent = "Продовжити";
//       } else if (selectedOption === "2" || selectedOption === "3") {
//         nextBtnText.textContent = "Ще раз";
//         nextBtn.addEventListener("click", resetToStepThree);
//       }
//     }

//     updateProgress();
//   }
// });

// function resetToStepThree() {
//   currentStep = 4;
//   updateProgress();
//   nextBtnText.textContent = "Продовжити";
//   nextBtn.removeEventListener("click", resetToStepThree);
// }

// function updateProgress() {
//   steps.forEach((step, index) => {
//     if (index <= currentStep) {
//       console.log(currentStep)
//       step.classList.add("active");
//     } else {
//       step.classList.remove("active");
//     }
//   });

//   stepsContent.forEach((content) => {
//     content.classList.remove("active");
//   });

//   if (currentStep === 5) {
//     // Показуємо відповідний контент для кроку 5 залежно від вибору
//     document
//       .getElementById(`step-content-5-${selectedOption}`)
//       .classList.add("active");
//   } else {
//     document
//       .getElementById(`step-content-${currentStep}`)
//       .classList.add("active");
//   }

//   const footerContents = document.querySelectorAll(".box-down__left-content");
//   footerContents.forEach((footerContent) => {
//     footerContent.classList.remove("active");
//   });

//   document.getElementById(`footer-step-${currentStep}`).classList.add("active");

//   const totalSteps = 5; // Загальна кількість кроків
//   const progressWidth = (currentStep / totalSteps) * 100;
//   progress.style.width = `${progressWidth}%`;
// }
