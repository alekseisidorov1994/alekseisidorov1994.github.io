'use strict';

let startBtn = document.getElementById('start'),
    budget = document.querySelector('.budget-value'),
    daybudget = document.querySelector('.daybudget-value'),
    expenses = document.querySelector('.expenses-value'),
    optionalexpenses = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthsavings = document.querySelector('.monthsavings-value'),
    yearsavings = document.querySelector('.yearsavings-value'),

    expensesItem = document.querySelectorAll('.expenses-item'),
    optionalItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    // кнопки
    allBtn = document.querySelectorAll('.data button'),
    expensesBtn = document.querySelectorAll('.data button')[0],
    optionalBtn = document.querySelectorAll('.data button')[1],
    countBtn = document.querySelectorAll('.data button')[2],
    // поля год меяц день
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value'),
    // возможный доход,checkbox,сумма, процент
    chooseIncome = document.querySelector('#income'),
    savingsCheck = document.querySelector('#savings'),
    chooseSum = document.querySelector('#sum'),
    choosePercent = document.querySelector('#percent'),
    levelValue = document.querySelector('.level-value');
    let money, time;
expensesBtn.disabled = true;
optionalBtn.disabled = true;
countBtn.disabled = true;

startBtn.addEventListener('click',function(){
    expensesBtn.disabled = false;
    optionalBtn.disabled = false;
    countBtn.disabled = false;
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
	money = +prompt("Ваш бюджет в месяц?", "");
	while (isNaN(money) || money == "" || money == null){
		money = +prompt("Ваш бюджет в месяц?", "");
    }
    appData.buget = money;
    appData.timeData = time; 
    budget.textContent = money.toFixed();
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value =new Date(Date.parse(time)).getMonth()+1;
    day.value = new Date(Date.parse(time)).getDate();
  

});
expensesBtn.addEventListener('click', function(){
    console.log(expensesItem.value);
    let sum=0;
    for (let i=0; i<expensesItem.length; i++ ){
        if(expensesItem[i].value!='' &&expensesItem[i].value!=undefined &&expensesItem[++i].value!='' && expensesItem[++i].value!=undefined)
        {
            let a = expensesItem[i].value,
                b = expensesItem[++i].value;
            if((typeof(a)==='string') && (typeof(a)!= null) && (typeof(b)!= null) && (a != '') && (b != '') && (a.length < 50)){
                appData.expenses[a]=b;
                console.log("done");
                sum+=+b;
                
            } else {
                console.log("bag result");
                i--;
            }
        }
    }
    expenses.textContent = sum.toFixed(1);


    
});
optionalBtn.addEventListener('click', function(){
 let sum= 0;
    for (let i=0; i< optionalItem.length; i++){
        let a =optionalItem[i].value;
        appData.optionalExpenses[i]= a;
        sum+=+a;
        optionalexpenses.textContent = sum.toFixed(1); 
    }
    
});

countBtn.addEventListener('click',function(){
    if(appData.buget != undefined ){
        appData.moneyPerDay = ((appData.buget-expenses.textContent)/30).toFixed(2);
        daybudget.textContent = appData.moneyPerDay;
        if(appData.moneyPerDay < 1000){
            levelValue.textContent = "Минимальный уровень достатка";
        }else if(appData.moneyPerDay > 1000 && appData.moneyPerDay < 3000){
            levelValue.textContent = "Средний уровень достатка";
        }else if(appData.moneyPerDay > 4000){
            levelValue.textContent = "Высокий уровень достатка";
        }else{
            levelValue.textContent = "Условие не выполнено";
        }
        
    }else{
        daybudget.textContent = 'Нажмите кнопку "начать расчет"';
    }
    
});

incomeItem.addEventListener('input',function(){
    let item =incomeItem.value;
    appData.income = item.split(',');
    incomeValue.textContent = item;


});

savingsCheck.addEventListener('click',function(){
    if(appData.savings == true){
        appData.savings= false;
    }else{
        appData.savings=true;
    }
});

chooseSum.addEventListener('input', function(){
    if(appData.savings == true && chooseSum!="" && isNaN(chooseSum)){
        let sum = +chooseSum.value,
            percent = +choosePercent.value;
            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;
            monthsavings.textContent = appData.monthIncome.toFixed(1);
            yearsavings.textContent = appData.yearIncome.toFixed(1);

        
    }else{
        // monthsavings.textContent ="Введите числа";
        // yearsavings.textContent =' ';

    }
 
  
});
choosePercent.addEventListener('input',function(){
    if(appData.savings == true && choosePercent!="" && isNaN(choosePercent)){
        let sum = +chooseSum.value,
            percent = +choosePercent.value;
            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;
            monthsavings.textContent = appData.monthIncome.toFixed(1);
            yearsavings.textContent = appData.yearIncome.toFixed(1);

        
    }else{
        // monthsavings.textContent ="Введите числа";
        // yearsavings.textContent =' ';

    }
 

});
let	appData = {
    buget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
// for( let i in appData){
// console.log("Наша программа включает в себя данные: "+i+ '-');
// }