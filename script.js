/*
    Project 01_06_02

    Author: Jamin Pottle
    Date:   8.20.18

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


/* The code below was added for the 01_06_02 project but you need IE8 to be able to test it so the code is correct but this is a note to show that the code was added */


// remove fallback placeholder text
function zeroPlaceholder(){
    var addressBox = document.getElementById("addrinput");
    addressBox.style.color = "black";
    if (addressBox.value === addressBox.placeholder){
        addressBox.value = "";
    }
}

// restore placeholder text if box contains no user entry
function checkPlaceholder() {
    var addressBox = document.getElementById("addrinput");
    if (addressBox.value === "") {
        addressBox.style.color = "rgb(178,184,183)";
        addressBox.value = addressBox.placeholder;
    }
}

// add placeholder text for browser that dont support placeholder attribute
function generatePlaceholder() {
    
    if (!Modernizer.input.placeholder) {
        var addressBox = document.getElementById("addrinput");
        addressBox.value = address.placeholder;
        addressBox.style.color = "rgb(178,184,183)";
        if(addressBox.addEventListener) {
            addressBox.addEventListener("focus", zeroPlaceholder, false);
            addressBox.addEventListener("blur", checkPlaceholder, false);
        } else if (addressBox.attachEvent) {
            addressBox.attachEvent("onfocus", zeroPlaceholder);
            addressBox.attachEvent("onblur", checkPlaceholder);
        }
    }
}

// function to set up the page
function setUpPage(){
    createEventListeners();
    generatePlaceholder();
}

// page load event handlers
if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}