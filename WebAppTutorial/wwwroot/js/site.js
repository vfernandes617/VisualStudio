// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

//Functions to be called onmouseover and to change the color of "Hello World"
function newColor() {
    document.getElementById("hello_world").style.color = "blue";
}

function oldColor() {
    document.getElementById("hello_world").style.color = "darkolivegreen";
}

document.addEventListener("DOMContentLoaded", function Mover() {
    const movingText = document.getElementById("moving-text");

    movingText.addEventListener("mouseover", Mover(),

        const: screenWidth = window.innerWidth,
        const: screenHeight = window.innerHeight,

        const: newLeft = Math.random() * (screenWidth - movingText.clientWidth),
        const: newTop = Math.random() * (screenHeight - movingText.clientHeight),

        movingText,style,left = '${newLeft}px',
        movingText,style,top = '${newTop}px',
    });

