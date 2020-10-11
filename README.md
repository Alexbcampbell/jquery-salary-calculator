# Project Name

jQuery Salary Calculator

## Description

With this project, my goal was to create a calculator that took in the following inputs: first name, last name, ID, job title and annual salary. The budget was set to not exceed \$\$20,000. If it did exceed, a red background was to appear on the total budget line.

I first constructed my page with HTML. Creating a header, inputs, button and table. I styled the header and table through CSS. I used jQuery in conjunction with javaScript to write functions that eventually displayed and appended information to my application page. When all of the input fields are filled in and the submit button clicked, the information is then displayed on the DOM. The total budget is updated to include the monthly salary of each employee. I created a function that divided their annual salary by twelve months, that information is then pushed to the total budget. Once that budget adds up to \$20,000, I wrote and IF statement that will change the background color of the total to red. There are functional delete buttons that take out the employee of the users choosing. It then deletes their info from the DOM and adjusts the total budget by subtracting their monthly salary.

### Usage

    1. Fill in information to input fields.
    2. Click submit.
    3. Info is applied to the page via DOM.
    4. Once the set budget is reached, a red background will appear.
    5. If the budget is exceeded, click the DELETE button on whichever employee is needed to remain within budget.

#### Built With

HTML5, CSS, JavaScript, jQuery.

##### License

MIT License

Copyright (c) [2020] [Alex Campbell]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

###### Acknowledgement

Thanks to Prime Digital Academy who equipped and helped me to make this application a reality. I would also like to thank Trevor Sansalone, Lara Komosa and Joey Heintz for all coming together to grind out some code on Saturday. We all shared what we had and helped each other solve problems.
