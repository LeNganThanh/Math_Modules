// Your code goes here!
//import all modules
import * as math from "./percentage.js";
import { calculateAspectRatio } from "./aspect-ratio.js";

//--Percentage Variables----------
const moduloForm = document.getElementById("modulo-form");
const perForm = document.getElementById("percentage-form");
const perOfForm = document.getElementById("percentageOf-form");
const diffForm = document.getElementById("difference-form");

let modulo1 = document.getElementById("modulo_1");
let modulo2 = document.getElementById("modulo_2");
let moduloResult = document.getElementById("modulo_result");

let per1 = document.getElementById("percentage_1");
let per2 = document.getElementById("percentage_2");
let perResult = document.getElementById("percentage_result");

let perOf1 = document.getElementById("percentageOf_1");
let perOf2 = document.getElementById("percentageOf_2");
let perOfResult = document.getElementById("percentageOf_result");

let diff1 = document.getElementById("difference_1");
let diff2 = document.getElementById("difference_2");
let diffResult = document.getElementById("difference_result");

//Modulo
moduloForm.addEventListener("change", function (e) {
  if (e.target.classList.contains("one")) {
    modulo1 = +e.target.value;
  } else if (e.target.classList.contains("two")) {
    modulo2 = +e.target.value;
  }
  moduloResult.value = math.modulo(modulo1, modulo2);
});

//Percentage
perForm.addEventListener("change", function (e) {
  if (e.target.classList.contains("one")) {
    per1 = +e.target.value;
  } else if (e.target.classList.contains("two")) {
    per2 = +e.target.value;
  }
  perResult.value = math.percentage(per1, per2);
});

//Percentage Of
perOfForm.addEventListener("change", function (e) {
  if (e.target.classList.contains("one")) {
    perOf1 = +e.target.value;
  } else if (e.target.classList.contains("two")) {
    perOf2 = +e.target.value;
  }
  perOfResult.value = math.percentageOf(perOf1, perOf2);
});

//Difference
diffForm.addEventListener("change", function (e) {
  if (e.target.classList.contains("one")) {
    diff1 = +e.target.value;
  } else if (e.target.classList.contains("two")) {
    diff2 = +e.target.value;
  }
  diffResult.value = math.difference(diff1, diff2);
});

//-----------------------------//
//Aspect-ratio variables
const aspectForm = document.getElementById("aspect-form");
let ratio1 = document.getElementById("ratio_1");
let ratio2 = document.getElementById("ratio_2");
let ratioWidthResult = document.getElementById("ratio_result-width");
let ratioHeightResult = document.getElementById("ratio_result-height");

aspectForm.addEventListener("change", function (e) {
  if (e.target.classList.contains("one")) {
    ratio1 = +e.target.value;
  } else if (e.target.classList.contains("two")) {
    ratio2 = +e.target.value;
  } else if (e.target.classList.contains("width")) {
    ratioWidthResult = e.target.value;
    ratioHeightResult.value = calculateAspectRatio(
      ratio1,
      ratio2,
      ratioWidthResult,
      "w"
    );
  } else if (e.target.classList.contains("height")) {
    ratioHeightResult = e.target.value;
    ratioWidthResult.value = calculateAspectRatio(
      ratio1,
      ratio2,
      ratioHeightResult,
      "h"
    );
  }
});
