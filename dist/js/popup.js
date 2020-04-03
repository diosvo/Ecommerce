"use strict";

// Open
document.getElementById('click-login').addEventListener('click', function () {
  document.querySelector('.bg-modal').style.display = 'flex';
}); // Close 

document.querySelector('.close').addEventListener('click', function () {
  document.querySelector('.bg-modal').style.display = 'none';
}); // Login & Register

var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function register() {
  x.style.left = "-20rem";
  y.style.left = "0";
  z.style.left = "8rem";
}

function login() {
  x.style.left = "0";
  y.style.left = "20rem";
  z.style.left = "0";
}