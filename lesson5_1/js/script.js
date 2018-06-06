
let menuItem = document.querySelectorAll('.menu-item'),
    menu = document.querySelector('.menu'),
    menuItemFive = document.createElement('li'), // создаем пятый пункт меню
    adv = document.querySelector('.adv'),
    column = document.querySelectorAll('.column'),
    question = prompt('Ваше отношение к технике apple'),
    answer = document.getElementById('prompt');

menu.insertBefore(menuItem[2], menuItem[1]); //вставляем второй второй пункт меню перед третьм

menu.appendChild(menuItemFive); // вставляем пятый пункт меню в конец меню
menuItemFive.innerHTML = 'Пятый пункт'; // добавляем в него текст
menuItemFive.classList.add('menu-item'); // добавляем к нему класс

document.body.style.background = 'url(img/apple_true.jpg)'; // меняем фонову картинку у body

column[1].removeChild(adv); //удаляем рекламу - хитро сделали 2 column - не сразу понял почему не удаляет

answer.textContent = question; //берем вопрос из promp и вставляем в поле на экране


