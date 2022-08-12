"use strict";
//import all modules
import * as math from "./percentage.js";
import { calculateAspectRatio } from "./aspect-ratio.js";
//Variables declare
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

//modulo
moduloForm.addEventListener("change", function (e) {
  let num1 = +modulo1.value;
  let num2 = +modulo2.value;
  moduloResult.value = math.modulo(num1, num2);
});

//percentage
perForm.addEventListener("change", function () {
  perResult.value = math.percentage(per1.value, per2.value);
});

//percentage of
perOfForm.addEventListener("change", function () {
  perOfResult.value = math.percentageOf(perOf1.value, perOf2.value);
});

//difference
diffForm.addEventListener("change", function () {
  diffResult.value = math.difference(diff1.value, diff2.value);
});
//------------------------------//
//Ratio aspect
const aspectForm = document.getElementById("aspect-form");
let ratio1 = document.getElementById("ratio_1");
let ratio2 = document.getElementById("ratio_2");
let ratioWidthResult = document.getElementById("ratio_result-width");
let ratioHeightResult = document.getElementById("ratio_result-height");

aspectForm.addEventListener("change", function (e) {
  if (e.target === ratioWidthResult) {
    ratioHeightResult.value = calculateAspectRatio(
      ratio1.value,
      ratio2.value,
      ratioWidthResult.value,
      "w"
    );
  } else {
    ratioWidthResult.value = calculateAspectRatio(
      ratio1.value,
      ratio2.value,
      ratioHeightResult.value,
      "h"
    );
  }
});
