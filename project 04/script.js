// ✅ 1. Online Course Enrollment Processor
// Scenario:
// An online platform tracks course enrollments for students. Each enrollment includes the
// student's name, selected course, and enrollment date.
// Task:
// Write a function that processes an array of enrollment objects, each containing:
// ● name: Name of the student.
// ● course: The name of the course.
// ● enrollmentDate: The date the student enrolled.

// The system should:
// 1. Use switch to assign a fee to each course:
// ○ Web Development: $200
// ○ Data Science: $250
// ○ Graphic Design: $150
// 2. Use if-else to apply a 10% early bird discount for enrollments made more than 30
// days before the course start date.
// 3. Format student names and courses using string methods (capitalize first letter of each
// word).
// 4. Use date methods to calculate the duration since enrollment.
// 5. Use array methods to generate a summary of enrollments and fees.


let students = [
    {
        name: "Ali",
        course: "web development",
        enrollmentDate: "01-02-2025"
    },
    {
        name: "Ahmed",
        course: "data science",
        enrollmentDate: "03-04-2025"
    },
    {
        name: "kamran",
        course: "graphics design",
        enrollmentDate: "01-05-2025"
    }
    ,
    {
        name: "waqar",
        course: "web development",
        enrollmentDate: "02-03-2025"
    }
];

function enrollmentProcess(students, courseStartDate) {
    const summary = students.map((enrollment) => {
        let fees;


        switch (enrollment.course.toLowerCase()) {
            case "web development":
                fees = 200;
                break;
            case "graphics design":
                fees = 150;
                break;
            case "data science":
                fees = 250;
                break;
            default:
                fees = 0;
        }

        const enrollmentDate = new Date(enrollment.enrollmentDate);
        const startDate = new Date(courseStartDate);
        const dayDiff = Math.floor((startDate - enrollmentDate) / (1000 * 60 * 60 * 24)); 

        if (dayDiff > 30) {
            fees *= 0.9; 
        }


        const formatText = (text) =>
            text.toLowerCase()
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ");

        const formattedName = formatText(enrollment.name);
        const formattedCourse = formatText(enrollment.course);


        const today = new Date();
        const duration = Math.floor((today - enrollmentDate) / (1000 * 60 * 60 * 24));

        return {
            name: formattedName,
            course: formattedCourse,
            fees: fees.toFixed(2),
            daysSinceEnrollment: duration
        };
    });


    console.log("Enrollment Summary");
    summary.forEach((entry) => {
        console.log(`${entry.name} enrolled in ${entry.course}, fees: $${entry.fees}, days since enrollment: ${entry.daysSinceEnrollment}`);
    });

    return summary;
}

enrollmentProcess(students, "03-01-2025");



// ✅ 2. Employee Payroll System
// Scenario:
// You are developing a payroll system for employees. Each employee has a salary, hours worked,
// and bonus eligibility.
// Task:
// Write a function that processes an array of employee objects, each containing:
// ● employeeName: The name of the employee.
// ● baseSalary: The base salary of the employee.
// ● hoursWorked: The total number of hours worked.
// ● eligibleForBonus: Boolean flag indicating if the employee is eligible for a bonus.

// The system should:
// 1. Calculate the overtime pay (1.5x the base rate) for any hours worked beyond 40.
// 2. Use switch to apply a bonus based on eligibility:
// ○ If eligible, apply a 10% bonus to the base salary.
// ○ If not eligible, no bonus.
// 3. Use if-else to check if the total salary exceeds $100,000, applying a tax rate of 30%
// for high earners.
// 4. Use string methods to format employee names.
// 5. Use array methods to calculate and display the total payroll.

let employees = [
    {
        employeeName: "Ali",
        baseSalary: 50000,
        hoursWorked: 39,
        eligibleForBonus: false
    },
    {
        employeeName: "Talha",
        baseSalary: 40000,
        hoursWorked: 32,
        eligibleForBonus: false
    },
    {
        employeeName: "Rahim",
        baseSalary: 70000,
        hoursWorked: 47,
        eligibleForBonus: true
    },
    {
        employeeName: "Rehman",
        baseSalary: 60000,
        hoursWorked: 40,
        eligibleForBonus: false
    },
    {
        employeeName: "Ali",
        baseSalary: 50000,
        hoursWorked: 39,
        eligibleForBonus: false
    },

]


function employeePayroll(employees) {
    const payRoll = employees.map((employee) => {
        let overtimePay = 0
        const hoursWorked = employee.hoursWorked
        if (hoursWorked > 40) {
            const hourlyRate = employee.baseSalary / 40
            const overtime = hoursWorked - 40
            overtimePay = overtime * hourlyRate * 1.5
        }
        let bonus = 0
        switch (employee.eligibleForBonus) {
            case true:
                bonus = employee.baseSalary * 0.10
                break;

            case false:
                bonus = 0;
                break;

        }

        let totalEarnings = employee.baseSalary + overtimePay + bonus;

        if (totalEarnings > 100000) {
            totalEarnings = totalEarnings - (0.3 * totalEarnings)
        } else {
            totalEarnings = totalEarnings
        }

        const formatText = (text) => {
            if (!text || typeof text !== "string") return "";

            return text
                .toLowerCase()
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ");
        };

        formatedName = formatText(employee.employeeName)

        return {
            name: formatedName,
            totalSalary: totalEarnings,
            baseSalary: employee.baseSalary
        }
    })
    console.log("Employees Salary")
    payRoll.forEach((entry) => {
        console.log(`Employee Name: ${entry.name}, basesalary is: ${entry.baseSalary}, and total Eaning is ${entry.totalSalary}`)
    })
    return payRoll
}

employeePayroll(employees)


// ✅ 3. Temperature Converter
// Scenario:
// You are building a temperature converter that converts between Celsius, Fahrenheit, and Kelvin.
// Task:
// Write a function that:
// 1. Takes in a temperature value and a unit (Celsius, Fahrenheit, or Kelvin).
// 2. Use switch to convert the given temperature to the other two units (e.g., Celsius to
// Fahrenheit and Kelvin).
// 3. Return the converted temperature values.

function temperatureConverter(value, unit) {

    let Celsius, Fahrenheit, Kelvin
    switch (unit.toLowerCase()) {
        case "celcius":
            Fahrenheit = (value * 9 / 5) + 32
            Kelvin = value + 273.15
            return{Fahrenheit,Kelvin}


        case "fahrenheit":
            Celsius = (value - 32) * 5 / 9
            Kelvin = ((value - 32) * 5 / 9) + 273.15
            return{Celsius,Kelvin}

        case "Kelvin":
            Celsius = value - 273.15
            Fahrenheit = ((value - 273.15) * 9 / 5) + 32
            return{Celsius, Fahrenheit}

        default:
            return "Please enter a valid unit: Celcius, Fahrenheit, or Kelvin";
            break;
    }


}
console.log(temperatureConverter(100, "Kelvin")) 


// ✅ 4. Banking System (Using Switch Case, Functions, and Loops)
// Scenario:
// You are developing a banking system that allows users to check their balance, deposit money,
// withdraw money, and transfer money to other users.
// Task:
// 1. Create an array of users, where each user has:
// ○ name (user’s name),
// ○ balance (user’s current balance).
// 2. Write a function that takes the user’s action (e.g., "deposit", "withdraw",
// "transfer", "checkBalance") and updates the user’s balance accordingly.
// 3. Use switch to handle the user’s action and:
// ○ For "deposit", add the deposit amount to the balance.
// ○ For "withdraw", subtract the withdrawal amount from the balance.
// ○ For "transfer", transfer money between users.
// 4. Return the updated balance after the action is performed.


let users = [
    {
        name: "Ali",
        balance: 20000
    },
    {
        name: "Ahmed",
        balance: 40000
    },
    {
        name: "Reham",
        balance: 10000
    },
    {
        name: "Sara",
        balance: 20000
    },
    {
        name: "Rizwan",
        balance: 50000
    },
]

function bankingSystem(action, name, amount, recipientName = null) {

    const user = users.find(u => u.name === name)
    let balance = user.balance

    switch (action.toLowerCase()) {
        case "deposit":
            balance = amount + balance
            return `Your new balance is: ${balance}`

        case "withdraw":
            if (user.balance >= amount) {
                user.balance -= amount
                return `Withdrawn ${amount}. New balance: ${user.balance}`;
            } else {
                return `insuficient amount`
            }


        case "transfer":
            if (!recipientName) return "Recipient name is required.";
            const recipient = users.find(u => u.name === recipientName);
            if (!recipient) return "Recipient not found.";
            if (user.balance >= amount) {
                user.balance -= amount;
                recipient.balance += amount;
                return `${user.name} transferred ${amount} to ${recipient.name}. ${user.name}'s new balance: ${user.balance}`;
            } else {
                return `Insufficient funds for transfer.`;
            }

        case "checkbalance":
            return `${user.name}'s balance is ${user.balance}`;

        default:
            return "Invalid action. Please use deposit, withdraw, transfer, or checkBalance.";
    }
}

console.log(bankingSystem("transfer", "Ahmed", 5000, "Ali"));


// ✅ 5. Multi-Currency Converter
// Scenario:
// You are building a currency converter for an international travel app. The app needs to convert
// an amount in one currency to multiple other currencies (e.g., USD to EUR, GBP, JPY, etc.).
// Task:
// 1. Create an object with exchange rates for different currencies (e.g., {"USD": 1,
// "EUR": 0.85, "GBP": 0.75, "JPY": 110.50}).
// 2. Write a function that:
// ○ Takes in the amount in USD and the target currency.
// ○ Converts the amount to the target currency using the exchange rates.
// ○ Use switch to handle the conversion based on the target currency.
// 3. Return the converted amount in the selected currency.

function currencyCoverter(amount, targetCurrency) {
    const currencies = {
        USD: 1,
        EUR: 0.85,
        GBP: 0.75,
        JPY: 110.50
    };

    let convertedAmount;

    switch (targetCurrency.toUpperCase()) {
        case "EURO":
            convertedAmount = amount * currencies.EUR;
            break;
        case "GBP":
            convertedAmount = amount * currencies.GBP;
            break;
        case "JPY":
            convertedAmount = amount * currencies.JPY;
            break;
        case "USD":
            convertedAmount = amount; 
            break;
        default:
            return "invalid input";
    }

    return `${amount} USD = ${convertedAmount.toFixed(2)} ${targetCurrency}`;
}
console.log(currencyCoverter(100, "EURO"))