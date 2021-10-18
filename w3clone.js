"use strict";
const tutorial = document.getElementById("tutorial");
const reference = document.getElementById("reference");
const exercise = document.getElementById("exercise");
const tutorials_sub = document.getElementById("tutorials_sub");
const references_sub = document.getElementById("references_sub");
const exercises_sub = document.getElementById("exercises_sub");
const cancel_sub_nav = document.getElementById("cancel_sub_nav");
const menu = document.getElementById("menu");
const subNav = document.getElementById("subNav");
const subNavCancel = document.getElementById("subNavCancel");
const mobTutorial = document.getElementById("mobTutorial");
const mobTutorialDrop = document.getElementById("mobTutorialDrop");
const mobReference = document.getElementById("mobReference");
const mobReferenceDrop = document.getElementById("mobReferenceDrop");
const mobExercise = document.getElementById("mobExercise");
const mobExerciseDrop = document.getElementById("mobExerciseDrop");
const editorFront = document.getElementById("editorFront");
const editorBack = document.getElementById("editorBack");
const editorFrontGif = document.getElementById("editorFrontGif");
const editorBackGif = document.getElementById("editorBackGif");

//=================================
let check_tutorial = "hide";
let check_reference = "hide";
let check_exercise = "hide";
//----------------
let sub_nav_show_hide = function (ele_tutorial, ele_reference, ele_exercise) {
  //function for show/show of sub link containers
  // For turorials
  if (ele_tutorial === "hide") {
    tutorials_sub.classList.remove("dis_block");
    tutorials_sub.classList.add("dis_none");

    check_tutorial = "show";
  }
  if (ele_tutorial === "show") {
    tutorials_sub.classList.remove("dis_none");
    tutorials_sub.classList.add("dis_block");
    check_tutorial = "hide";
  }
  // For turorials
  if (ele_reference === "hide") {
    references_sub.classList.remove("dis_block");
    references_sub.classList.add("dis_none");
    check_reference = "show";
  }
  if (ele_reference === "show") {
    references_sub.classList.remove("dis_none");
    references_sub.classList.add("dis_block");
    check_reference = "hide";
  }
  // For turorials
  if (ele_exercise === "hide") {
    exercises_sub.classList.remove("dis_block");
    exercises_sub.classList.add("dis_none");
    check_exercise = "show";
  }
  if (ele_exercise === "show") {
    exercises_sub.classList.remove("dis_none");
    exercises_sub.classList.add("dis_block");
    check_exercise = "hide";
  }
};
//============================
// onclick menu button drop comes and shut function
let mob_nav_check = "hide";
const mob_sub_nav_show_hide = function (ele) {
  if (ele === "hide") {
    subNav.classList.remove("dis_block");
    subNav.classList.add("dis_none");

    mob_nav_check = "show";
  }
  if (ele === "show") {
    subNav.classList.remove("dis_none");
    subNav.classList.add("dis_block");
    mob_nav_check = "hide";
  }
};
//=============================
// onclick menu tutorial drop comes and shut function
let mob_tutorial_check = "hide";
const mob_sub_Tutorial_show_hide = function (ele) {
  if (ele === "hide") {
    mobTutorialDrop.classList.remove("dis_block");
    mobTutorialDrop.classList.add("dis_none");

    mob_tutorial_check = "show";
  }
  if (ele === "show") {
    mobTutorialDrop.classList.remove("dis_none");
    mobTutorialDrop.classList.add("dis_block");
    mob_tutorial_check = "hide";
  }
};
//=============================
// onclick menu button drop comes and shut function
let mob_Reference_check = "hide";
const mob_sub_Reference_show_hide = function (ele) {
  if (ele === "hide") {
    mobReferenceDrop.classList.remove("dis_block");
    mobReferenceDrop.classList.add("dis_none");

    mob_Reference_check = "show";
  }
  if (ele === "show") {
    mobReferenceDrop.classList.remove("dis_none");
    mobReferenceDrop.classList.add("dis_block");
    mob_Reference_check = "hide";
  }
};
//=============================
// onclick menu button drop comes and shut function
let mob_Exercise_check = "hide";
const mob_sub_Exercise_show_hide = function (ele) {
  if (ele === "hide") {
    mobExerciseDrop.classList.remove("dis_block");
    mobExerciseDrop.classList.add("dis_none");

    mob_Exercise_check = "show";
  }
  if (ele === "show") {
    mobExerciseDrop.classList.remove("dis_none");
    mobExerciseDrop.classList.add("dis_block");
    mob_Exercise_check = "hide";
  }
};
//=============================
// funtion for editor front & back show/hide
const editorFrontGifShow = function () {
  if (editorBackGif.classList.contains("dis_block")) {
    editorBackGif.classList.remove("dis_block");
    editorBackGif.classList.add("dis_none");
    editorFrontGif.classList.remove("dis_none");
    editorFrontGif.classList.add("dis_block");
  }
};
const editorBackGifShow = function () {
  if (editorFrontGif.classList.contains("dis_block")) {
    editorFrontGif.classList.remove("dis_block");
    editorFrontGif.classList.add("dis_none");
    editorBackGif.classList.remove("dis_none");
    editorBackGif.classList.add("dis_block");
  }
};
//=============================
// calling sub_nav_show_hide function of full screen
window.addEventListener("load", function () {
  sub_nav_show_hide(check_tutorial, check_reference, check_exercise);
});
tutorial.addEventListener("click", function () {
  sub_nav_show_hide(check_tutorial, "hide", "hide");
});
reference.addEventListener("click", function () {
  sub_nav_show_hide("hide", check_reference, "hide");
});
exercise.addEventListener("click", function () {
  sub_nav_show_hide("hide", "hide", check_exercise);
});
cancel_sub_nav.addEventListener("click", function () {
  sub_nav_show_hide("show", "show", "show");
});
//================================
