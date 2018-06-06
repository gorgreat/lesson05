let openBtn = document.getElementById('open-btn'), //Получить кнопку "Открыть магазин" через id
    
    //Получить все поля в левом меню через классы
    nameDiv = document.getElementsByClassName('name'),
    nameValue = document.getElementsByClassName('name-value'),
    budgetDiv = document.getElementsByClassName('budget'),
    budgetValue = document.getElementsByClassName('budget-value'),    
    goodsDiv = document.getElementsByClassName('goods'),
    goodsValue = document.getElementsByClassName('goods-value'),  
    itemsDiv = document.getElementsByClassName('items'),
    itemsValue = document.getElementsByClassName('items-value'),  
    employersDiv = document.getElementsByClassName('employers'),
    employersValue = document.getElementsByClassName('employers-value'),     
    discountDiv = document.getElementsByClassName('discount'),
    discountValue = document.getElementsByClassName('discount-value'),  
    isopenDiv = document.getElementsByClassName('isopen'),
    isopenValue = document.getElementsByClassName('isopen-value'), 
    
    //Получить поля категории товаров через класс
    goodsItem = document.getElementsByClassName('goods-item'),
    
    //Получить все 3 кнопки через Tag
    goodsItemBtn = document.getElementsByTagName('button');

    //Получить поля ввода товаров, времени и расчета бюджета через querySelector
    chooseItem = document.querySelector('.choose-item');
    timeValue = document.querySelector('.time-value');
    countBudgetValue = document.querySelector('.count-budget-value');

  //Получить поля имен сотрудников через querySelectorAll
    hireEmployersItem = document.querySelectorAll('.hire-employers-item');

console.log(hireEmployersItem);