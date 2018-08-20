/*
    Project 01_06_01

    Author: Jamin Pottle
    Date:   8.16.18

    Filename: script.js
*/
"use strict";
 var formValidity = true;

// function to validate required fields
function validateRequired(){
    var requiredElements = document.querySelectorAll("#contactinfo input");
    var errorDiv = document.getElementById("errorText"); 
    var elementCount = requiredElements.length;
    var currentElement;
    try {
        for (var i = 0; i < elementCount; i++) {
            currentElement = requiredElements[i];
            if (currentElement.value === "") {
                currentElement.style.background = "rgb(255,233,233)";
                formValidity = false;
            } else {
                currentElement.style.background = "white";
                errorDiv.style.display = "none";
            }
        }

        if (formValidity === false) {
            throw "Please fill out all required fields";
        }
    } catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
    }
}

//function to validate form
function validateForm(evt){
     // prevent form default behavior - submit
     if (evt.preventDefault) {
        evt.preventDefault();
    } else {
        evt.returnValue = false;
    }
    formValidity = true;

    validateRequired();

    if (formValidity === true) {
        document.getElementsByTagName("form")[0].submit();
    }
}

// function to create event listeners
function createEventListeners() {
    if (window.addEventListener) {
        window.addEventListener("submit", validateForm, false);
    } else if (window.attachEvent) {
        window.attachEvent("onsubmit", validateForm);
    }
}

// function to set up the page
function setUpPage(){
    createEventListeners();
}

// page load event handlers
if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}