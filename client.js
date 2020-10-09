console.log('HELLO');

$(document).ready(readyNow);

function readyNow() {
    $('.js-click-submit').on('click', clickToSubmit);
    
}

function clickToSubmit() {
    const firstName = $('.js-field-firstname').val();
    const lastName = $('.js-field-lastname').val();
    const idNumb = $('.js-field-id').val();
    const jobTitle = $('.js-field-title').val();
    const annualsalary = $('.js-field-salary').val();
    console.log(firstName, lastName, idNumb, jobTitle, annualsalary);
}