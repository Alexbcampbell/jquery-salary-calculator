console.log('HELLO');

const employeeList = [];

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
    
    const employee = {
        firstName,
        lastName,
        idNumb,
        jobTitle,
        annualsalary,
    };
    employeeList.push(employee);

    console.log(employee);
}