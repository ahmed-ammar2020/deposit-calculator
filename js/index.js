"use strict";
const form = document.forms.my;
const initialInput = form.elements.initialValue;
const timeSelect = form.elements.time;
const interestInput = form.elements.interestValue;
const wasValue = document.querySelector(".wasValue");
const becomeValue = document.querySelector(".becomeValue");
const wasChart = document.querySelector(".wasChart");
const becomeChart = document.querySelector(".becomeChart");
initialInput.value = 10000;
interestInput.value = 5;
let result = Math.round(
  initialInput.value * (1 + interestInput.value / 100) ** timeSelect.value
);
wasValue.textContent = initialInput.value;
becomeValue.textContent = result;
wasChart.style.height = initialInput.value / 100 + "px";
becomeChart.style.height = result / 100 + "px";

initialInput.addEventListener("input", function () {
  if (!this.value) {
    value = 0;
  }
  result = Math.round(
    initialInput.value * (1 + interestInput.value / 100) ** timeSelect.value
  );
  console.log(result);
  wasValue.textContent = this.value;
  becomeValue.textContent = result;
  wasChart.style.height = initialInput.value / 100 + "px";
  becomeChart.style.height = result / 100 + "px";
});

interestInput.addEventListener("input", function () {
  if (!this.value) {
    value = 0;
  }

  result = Math.round(
    initialInput.value * (1 + interestInput.value / 100) ** timeSelect.value
  );
  console.log(result);
  wasValue.textContent = initialInput.value;
  becomeValue.textContent = result;
  wasChart.style.height = initialInput.value / 100 + "px";
  becomeChart.style.height = result / 100 + "px";
});

timeSelect.addEventListener("change", function () {
  result = Math.round(
    initialInput.value * (1 + interestInput.value / 100) ** timeSelect.value
  );
  console.log(result);
  wasValue.textContent = initialInput.value;
  becomeValue.textContent = result;
  wasChart.style.height = initialInput.value / 100 + "px";
  becomeChart.style.height = result / 100 + "px";
});
