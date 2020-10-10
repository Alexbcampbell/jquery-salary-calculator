console.log('HELLO');

const employeeList = [];

$(document).ready(readyNow);

function readyNow() {
    $('.js-click-submit').on('click', clickToSubmit);
    $('.js-cost-list').on('event', '.js-btn-delete', deleteEmployee);
    
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
    };
    employeeList.push(employee);
    render();

    console.log(employee);
}

function deleteEmployee() {
    $(this).parent().parent().addClass('isDeleted');
}

function render() {
    $('.js-cost-list').empty();
    let monthTotal = 0;
    for(let i = 0; i < employeeList.length; i++) {
        console.log('Render', employeeList[i]);
        const item = employeeList[i];

        monthTotal += parseInt(item.annualSalary);

        $('.js-cost-list').append(
           // '<tr>' + '<td>' + item.firstName + '</td>' + '<td>' + item.lastName + '</td>' + '<td>' + item.idNumb + '</td>' + '<td>' + item.jobTitle + '</td>' + '<td>' + item.annualsalary + '</td>' + '<td><button>Delete</button></td>' + '</tr>');
        `<tr>
            <td>${item.firstName}</td>
            <td>${item.lastName}</td>
            <td>${item.idNumb}</td>
            <td>${item.jobTitle}</td>
            <td>${item.annualSalary}</td>
            <td><button class="js-btn-delete">Delete</button></td>
        </tr>`
            );
        }

        $('.js-total-monthly').text(monthTotal);
}