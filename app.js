'use strict';

function getNumber() {
    const userNumber = $('#number').val();
    return userNumber;
}

function getDogImage(number) {
    for (let i = 0; i < number; i++)
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(responseJson => 
            displayImage(responseJson))
        .catch(error => alert('Something went wrong. Try again later.'));
}

function displayImage(responseJson) {
    console.log(responseJson);
    $('.results').append(
        `<img src="${responseJson.message}" class="results-img">`
    );
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        $('.results').empty().append(
            `<h3>So many dogs!!!</h3>`
        );
        getDogImage(getNumber());
    });
}

$(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
});