'use strict'

money = +prompt("Ваш бюджет на месяц?", ""),
time = prompt("Введите дату в формате YYYY-MM-DD", "");

// let money, time;

// function start() {
//     money = +prompt("Ваш бюджет на месяц?", "");
//     time = prompt("Введите дату в формате YYYY-MM-DD", "");

//     while(isNaN(money) || money == "" || money = null) {
//         money = +prompt("Ваш бюджет на месяц?", "");
//     }
// }

// start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязатеьную строку расходов в этом месяце', ""),
        b = prompt("Во сколько это обойдется?", "");
    if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) != null &&
        a != "" && b != "" && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        console.log("Fail");
        i--;
    }
};

appData.moneyPerday = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerday);

if (appData.moneyPerday < 3000) {
    console.log("Минимальный уровень достатака");
} else if (appData.moneyPerday > 3000 && appData.moneyPerday < 6000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerday > 6000) {
    console.log("Да ты сука богач!");
} else {
    console.log("ERORR")
};

for (let i = 0; i < 3; i++) {
    let c = prompt("Необзательные расходы но очень хочется", ""),
        d = prompt("Сколько ну это нужно денег?", ""),
        f = prompt("Благотоврительность куда в этом месяце пожертвуем 10% от своего дохода?", ""),
        g = prompt("Ввиедите сумму");
}
// for (let i = 0; i < 2; i++) {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {                            
//         console.log ("bad result");
//         i--;
//     }

// };