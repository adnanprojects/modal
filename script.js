"use strict";

// Variable declaration
const showModal = document.querySelectorAll(".show-modal");
const closeModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");

// Open Modal function
const open = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// Close Modal Function
const close = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Open Modal Event
for (let i = 0; i < showModal.length; i++)
  showModal[i].addEventListener("click", open);

// Close Modal Event
overlay.addEventListener("click", close);
closeModal.addEventListener("click", close);

// Keypress Event
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    close();
  }
});
