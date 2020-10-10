console.log('HELLO');

const employeeList = [];

$(document).ready(readyNow);

function readyNow() {
    $('.js-click-submit').on('click', clickToSubmit);
    $('.js-cost-list').on('click', '.js-btn-delete', deleteEmployee);
    
}

function clickToSubmit() {
    const firstName = $('.js-field-firstname').val();
    const lastName = $('.js-field-lastname').val();
    const idNumb = $('.js-field-id').val();
    const jobTitle = $('.js-field-title').val();
    const annualSalary = $('.js-field-salary').val();
    
    const employee = {
        firstName,
        lastName,
        idNumb,
        jobTitle,
        annualSalary,
        isDeleted: false,
    };
    employeeList.push(employee);
    render();

    $('.js-field-firstname').val('');
    $('.js-field-lastname').val('');
    $('.js-field-id').val('');
    $('.js-field-title').val('');
    $('.js-field-salary').val('');

    console.log(employee);
}

function deleteEmployee() {
    const index = $(this).data('index');
    employeeList[index].isDeleted = true;
    $(this).parent().parent().empty('isDeleted');

    deleteSelectedEmployee();
}

function render() {
    $('.js-cost-list').empty();
    let monthTotal = 0;
    for(let i = 0; i < employeeList.length; i++) {
        const item = employeeList[i];

        monthTotal += parseInt(item.annualSalary / 12);

        $('.js-cost-list').append(
           // '<tr>' + '<td>' + item.firstName + '</td>' + '<td>' + item.lastName + '</td>' + '<td>' + item.idNumb + '</td>' + '<td>' + item.jobTitle + '</td>' + '<td>' + item.annualsalary + '</td>' + '<td><button>Delete</button></td>' + '</tr>');
        `<tr>
            <td>${item.firstName}</td>
            <td>${item.lastName}</td>
            <td>${item.idNumb}</td>
            <td>${item.jobTitle}</td>
            <td>${item.annualSalary}</td>
            <td><button class="js-btn-delete" data-index="${i}">Delete</button></td>
        </tr>`
            );
        }
        deleteSelectedEmployee();
        $('.js-total-monthly').text(monthTotal);
        
}

function deleteSelectedEmployee() {
    let monthTotal = 0;
    for(let i = 0; i < employeeList.length; i++) {
        const item = employeeList[i];
        if(item.isDeleted === true) {
            monthTotal  == parseInt(item.annualSalary / 12);
        }   
    }
    $('.js-total-monthly').text(monthTotal);
    if(monthTotal > 20000){
        $('..js-total-monthly').css('background-color', 'red');
    }else if(monthTotal < 20000)
    $('.js-total-monthly').css('background-color', 'lightgray');
}