'use strict';

function getNumber() {
    let userNumber = $('#number').val();
    if (!userNumber) {
        userNumber = 3;
    }
    return userNumber;
}

function getDogImage(number) {
    fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
        .then(response => response.json())
        .then(responseJson => 
            displayImage(responseJson, number))
        .catch(error => alert('Something went wrong. Try again later.'));
}

function displayImage(responseJson, number) {
    console.log(responseJson);
    for (let i = 0; i < number; i ++) {
        $('.results').append(
            `<img src="${responseJson.message[i]}" class="results-img">`
        );
    }
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        const number = getNumber();
        if (number > 0 && number <= 50) {
            $('.results').empty().append(
                `<h3>So many dogs!!!</h3>`
            );
            getDogImage(number);
            }
        else {
            $('.results').empty().append(
                `<p>Please enter a number between 1 and 50.<p>`
            );
        }
    });
}

$(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
});