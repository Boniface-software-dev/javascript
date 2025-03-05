let number = 3; 
{
    
    if (number === 1) {
        console.log("Monday");
    } else if (number === 2) {
        console.log("Tuesday");
    } else if (number === 3) {
        console.log("Wednesday");
    } else if (number === 4) {
        console.log("Thursday");
    } else if (number === 5) {
        console.log("Friday");
    } else if (number === 6) {
        console.log("Saturday");
    } else if (number === 7) {
        console.log("Sunday");
    } else {
        console.log("Out of bounds exception(1-7)");
    }
};



//convert from nested if else statements and use a switch case statement//
let numberD = 4;
let getDayOfWeek = function(num) {
    switch (num) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid input! Please enter a number between 1 and 7.");
    }
};

// Call the function with the chosen number
getDayOfWeek(number);

//use the tenary operator to rewrite the code//
let getDay = () =>   {
    let day = (number === 1) ? "Monday" :
             (number === 2) ? "Tuesday" :
             (number === 3) ? "Wednesday" :
             (number === 4) ? "Thursday" :
             (number === 5) ? "Friday" :
             (number === 6) ? "Saturday" :
             (number === 7) ? "Sunday" : "Invalid input! Please enter a number between 1 and 7.";
    console.log(day);
};