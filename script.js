let getDaysInMonth = (month, year) => {
    if (month == 2) {
        if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
            return 29;
        } else {
            return 28;
        }
    } else if (month == 4 || month == 6 || month == 9 || month == 11) {
        return 30;
    } else {
        return 31;
    }
}

let calculate_age = () => {
    let today = new Date();

    let current_date = today.getDate();
    let current_month = today.getMonth() + 1; 
    let current_year = today.getFullYear();
    
    let birth_date = Number(document.getElementById('date').value);
    let birth_month = Number(document.getElementById('month').value);
    let birth_year = Number(document.getElementById('year').value);
    
    let days = current_date - birth_date;
    let months = current_month - birth_month;
    let years = current_year - birth_year;
    
   
    if (days < 0) {
        days += getDaysInMonth(current_month - 1, current_year); 
        months--;
    }
    
    if (months < 0) {
        years--;
        months += 12;
    }
    
    let val = `You are ${years} years ${months} months and ${days} days old...`;
    console.log(val);
    document.getElementById('age').innerText = val;
    
    
    document.getElementById('date').value = "";
    document.getElementById('month').value = "";
    document.getElementById('year').value = "";
}
