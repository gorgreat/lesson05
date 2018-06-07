let openBtn = document.getElementById('open-btn'), //Получить кнопку "Открыть магазин" через id

  //Получить все поля в левом меню через классы
  nameDiv = document.getElementsByClassName('name')[0],
  nameValue = document.getElementsByClassName('name-value')[0],

  budgetDiv = document.getElementsByClassName('budget')[0],
  budgetValue = document.getElementsByClassName('budget-value')[0],

  goodsDiv = document.getElementsByClassName('goods')[0],
  goodsValue = document.getElementsByClassName('goods-value')[0],

  itemsDiv = document.getElementsByClassName('items')[0],
  itemsValue = document.getElementsByClassName('items-value')[0],

  employersDiv = document.getElementsByClassName('employers')[0],
  employersValue = document.getElementsByClassName('employers-value')[0],

  discountDiv = document.getElementsByClassName('discount')[0],
  discountValue = document.getElementsByClassName('discount-value')[0],

  isopenDiv = document.getElementsByClassName('isopen')[0],
  isopenValue = document.getElementsByClassName('isopen-value')[0],

  //Получить поля категории товаров через класс
  goodsItem = document.getElementsByClassName('goods-item'),

  //Получить все 3 кнопки через Tag
  goodsItemBtn01 = document.getElementsByTagName('button')[1],
  goodsItemBtn02 = document.getElementsByTagName('button')[2],
  goodsItemBtn03 = document.getElementsByTagName('button')[3],

  //Получить поля ввода товаров, времени и расчета бюджета через querySelector
  chooseItem = document.querySelector('.choose-item'),
  timeValue = document.querySelector('.time-value'),
  countBudgetValue = document.querySelector('.count-budget-value'),

  //Получить поля имен сотрудников через querySelectorAll
  hireEmployersItem = document.querySelectorAll('.hire-employers-item');
