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
    render();

    console.log(employee);
}

function render() {
    $('.js-cost-list').empty();
    for(let i = 0; i < employeeList.length; i++) {
        console.log('Render', employeeList[i]);
        const item = employeeList[i];

        $('.js-cost-list').append(
            '<tr>' + '<td>' + item.firstName + '</td>' + '<td>' + item.lastName + '</td>' + '<td>' + item.idNumb + '</td>' + '<td>' + item.jobTitle + '</td>' + '<td>' + item.annualsalary + '</td>' + '<td><button>Select</button></td>' + '</tr>');
    }
}