import * as wmRoot from "./modules/root.js";
import * as wmFunctions from "./modules/functions.js";

wmRoot.isWebp();
wmRoot.project();

document.addEventListener("DOMContentLoaded", function () {
  const steps = document.querySelectorAll(".step-content");
  const boxDownContents = document.querySelectorAll(".box-down__left-content");
  const progressBar = document.getElementById("progress");
  const stepMarkers = document.querySelectorAll(".step");
  const nextBtn = document.getElementById("next");
  const nextBtnName = document.getElementById("text-button")
  let currentStep = 0;
  let userChoices = {}; 
  let isGoingBack = false;

  function showStep(stepIndex) {
    steps.forEach((step, index) => {
      step.style.display = index === stepIndex ? "block" : "none";
    });

    boxDownContents.forEach((boxDown, index) => {
      boxDown.style.display = index === stepIndex ? "block" : "none";
    });

    updateProgressBar(stepIndex);
    updateButtonText(isGoingBack);
  }

  function updateProgressBar(stepIndex) {
    switch (stepIndex) {
      case 0:
      case 1:
        updateProgress(0);
        break;
      case 2:
        updateProgress(1);
        break;
      case 7:
        updateProgress(2);
        break;
      case 11:
        updateProgress(3);
        break;
      case 12:
      case 13:
      case 14:
        updateProgress(4);
        break;
      case 16:
      case 17:
      case 18:
      case 19:
      case 20:
      case 21:
        updateProgress(5);
        break;
      default:
        break;
    }
  }

  function updateProgress(markerIndex) {
    stepMarkers.forEach((marker, index) => {
      if (index <= markerIndex) {
        marker.classList.add("active");
      } else {
        marker.classList.remove("active");
      }
    });

    const progressWidth = (markerIndex / (stepMarkers.length - 1)) * 100;
    progressBar.style.width = `${progressWidth}%`;
  }

  function handleNextStep() {

    switch (currentStep) {
      case 3:
        const step4Choice = document.querySelector(
          'input[name="product"]:checked'
        );
        if (step4Choice) {
          userChoices.step4 = step4Choice.value;
          if (step4Choice.value === "1") currentStep = 7;
          if (step4Choice.value === "2") {
            currentStep = 5;
            isGoingBack = true;
          };
          if (step4Choice.value === "3") {
            isGoingBack = true;
            currentStep = 6
          };
        }
        break;
      case 5:
      case 6:
        isGoingBack = false;
        currentStep = 3;
        break;
      case 8:
        const step8Choice = document.querySelector(
          'input[name="increase"]:checked'
        );
        if (step8Choice) {
          userChoices.step8 = step8Choice.value;
          if (step8Choice.value === "350" || step8Choice.value === "600")
            currentStep = 10;
          if (step8Choice.value === "1200") {
            isGoingBack = true;
            currentStep = 9;
          }
        }
        break;
      case 9:
        currentStep = 8;
        isGoingBack = false;
        break;
      case 11:
        const step11Choice = document.querySelector(
          'input[name="advertising"]:checked'
        );
        if (step11Choice) {
          userChoices.step7 = step11Choice.value;
          if (step11Choice.value === "5") currentStep = 12;
          if (step11Choice.value === "10") currentStep = 13;
          if (step11Choice.value === "20") currentStep = 14;
        }
        break;
      case 12:
      case 13:
      case 14:
        currentStep = 15;
        break;
      case 15:
        if (userChoices.step7 === "5" && userChoices.step8 === "350") {
          currentStep = 16;
        } else if (userChoices.step7 === "10" && userChoices.step8 === "350") {
          currentStep = 17;
        } else if (userChoices.step7 === "20" && userChoices.step8 === "350") {
          currentStep = 18;
        } else if (userChoices.step7 === "5" && userChoices.step8 === "600") {
          currentStep = 19;
        } else if (userChoices.step7 === "10" && userChoices.step8 === "600") {
          currentStep = 20;
        } else if (userChoices.step7 === "20" && userChoices.step8 === "600") {
          currentStep = 21;
        }
        break;
      case 16:
      case 17:
      case 18:
      case 19:
      case 20:
      case 21:
        currentStep = 22;
        break;
      case 22:
        break;
      default:
        currentStep++;
        break;
    }

    showStep(currentStep);
    
  }

  function updateButtonText(isGoingBack) {
    if (isGoingBack) {
      nextBtnName.textContent = "Ще раз";
    } else {
      nextBtnName.textContent = "Продовжити";
    }
  }

  nextBtn.addEventListener("click", handleNextStep);
  showStep(currentStep);
});