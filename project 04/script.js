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


// let students = [
//     {
//         name: "Ali",
//         course: "web development",
//         enrollmentDate: "01-02-2025"
//     },
//     {
//         name: "Ahmed",
//         course: "data science",
//         enrollmentDate: "03-04-2025"
//     },
//     {
//         name: "kamran",
//         course: "graphics design",
//         enrollmentDate: "01-05-2025"
//     }
//     ,
//     {
//         name: "waqar",
//         course: "web development",
//         enrollmentDate: "02-03-2025"
//     }
// ];

// function enrollmentProcess(students, courseStartDate) {
//     const summary = students.map((enrollment) => {
//         let fees;


//         switch (enrollment.course.toLowerCase()) {
//             case "web development":
//                 fees = 200;
//                 break;
//             case "graphics design":
//                 fees = 150;
//                 break;
//             case "data science":
//                 fees = 250;
//                 break;
//             default:
//                 fees = 0;
//         }

//         const enrollmentDate = new Date(enrollment.enrollmentDate);
//         const startDate = new Date(courseStartDate);
//         const dayDiff = Math.floor((startDate - enrollmentDate) / (1000 * 60 * 60 * 24)); 

//         if (dayDiff > 30) {
//             fees *= 0.9; 
//         }


//         const formatText = (text) =>
//             text.toLowerCase()
//                 .split(" ")
//                 .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//                 .join(" ");

//         const formattedName = formatText(enrollment.name);
//         const formattedCourse = formatText(enrollment.course);


//         const today = new Date();
//         const duration = Math.floor((today - enrollmentDate) / (1000 * 60 * 60 * 24));

//         return {
//             name: formattedName,
//             course: formattedCourse,
//             fees: fees.toFixed(2),
//             daysSinceEnrollment: duration
//         };
//     });


//     console.log("Enrollment Summary");
//     summary.forEach((entry) => {
//         console.log(`${entry.name} enrolled in ${entry.course}, fees: $${entry.fees}, days since enrollment: ${entry.daysSinceEnrollment}`);
//     });

//     return summary;
// }

// enrollmentProcess(students, "03-01-2025");



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