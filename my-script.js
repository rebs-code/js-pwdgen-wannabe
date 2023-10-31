"use strict";

document.getElementById('startButton').addEventListener('click', function() {
    const nameInput = prompt('Please enter your name:'); // asks user to input name
    const surnameInput = prompt('Please enter your surname:'); //asks user to input surname
    const colorInput = prompt('Please enter your age:'); //asks user to input fav color
    const minNum = 1;
    const maxNum = 101; //in this case, the pseudo random number is between 1 (inclusive) and 100 (exclusive)

    // Step 1: math.Random generates a pseudo random number between 0 and 1 (1 exclusive).
    // Step 2: maxNum - minNum sets the range.
    // Step 3: Math.random() * (maxNum - minNum) scales the number into our range (example: 0.15 * 100 = 15).
    // Step 4: Math.floor rounds the number down to the nearest whole number.
    // Step 5: We add minNum at the end to keep the range within 1 and 101 (exclusive), without this the range would be 0 (inclusive) to 100 (exclusive)


    const randomNum = Math.floor(Math.random() * (maxNum - minNum) + minNum);

    document.getElementById("name").textContent += " " + nameInput;
    document.getElementById("surname").textContent += " " + surnameInput;
    document.getElementById("color").textContent += " " + colorInput;
    document.getElementById("password").textContent += " " + nameInput + surnameInput + colorInput + randomNum;
});
