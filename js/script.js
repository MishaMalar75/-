function showText() {
    let items = document.querySelectorAll('.demo');
    items.forEach((item) => {
        item.classList.remove('play');
        void item.offsetWidth;
        item.classList.add('play');
    });
}

function MyFunction1() {
    let x = document.getElementsByClassName("demo");
    x[3].style.border = '2px solid #00213A'
    x[4].style.border = '2px solid #7191A8'
    x[5].src = "images/life_stealer.png";
    x[0].innerHTML = "Керрі";
    x[1].innerHTML = "Це герої, ефективність яких безпосередньо залежить від придбаних предметів і рівня фарму золота. На ранніх етапах гри вони зазвичай вразливі й потребують підтримки саппортів на лінії, але в пізній грі здатні завдавати величезної шкоди та вирішувати результат командних боїв. Ідеальний керрі вміє ефективно добивати крипів і ворожих героїв, швидко накопичувати предмети та використовувати свої здібності для максимального 𝙳𝙿𝚂";
    x[2].innerHTML = "Приклад персонажів:";
    x[2].style.marginBottom = "0px";
    x[3].src = "images/phantom_assassin.png";
    x[3].height = "60";
    x[3].width = "100";
    x[4].src = "images/morphling.png";
    x[4].height = "60";
    x[4].width = "100";
    x[5].style.border = '2px solid #670000'
    x[5].height = "60";
    x[5].width = "100";
    showText()
}

function MyFunction2() {
    let x = document.getElementsByClassName("demo");
    x[3].style.border = '2px solid #028219'
    x[4].style.border = '2px solid #075714'
    x[5].style.border = '2px solid #670000'
    x[0].innerHTML = "Мідер";
    x[1].innerHTML = "Гравець на середній лінії, який виконує ключову роль у командній грі. Він має швидко набирати досвід і контролювати руни, що дозволяє створювати темп і тиск на ворожі лінії. Мідери часто беруть участь у контролі карти та допомагають на бокових лініях, що робить їх важливими для успіху команди.";
    x[2].innerHTML = "Приклад персонажів:";
    x[2].style.marginBottom = "0px";
    x[3].src = "images/rubick.png";
    x[3].height = "60";
    x[3].width = "100";
    x[4].src = "images/necrolyte.png";
    x[4].height = "60";
    x[4].width = "100";
    x[5].src = "images/nevermore.png";
    x[5].height = "60";
    x[5].width = "100";
    showText();
}

function MyFunction3() {
    let x = document.getElementsByClassName("demo");
    x[3].style.border = '2px solid #02669B'
    x[4].style.border = '2px solid #00213A'
    x[5].style.border = '2px solid #670000'
    x[0].innerHTML = "Оффлейнер";
    x[1].innerHTML = "Гравець, який стоїть на складній лінії проти ворожого керрі та його саппорта. Оффлейнери часто ініціюють командні бої в пізній грі. Ця позиція вимагає гнучкості та розуміння гри, адже оффлейнеру доводиться виживати проти кількох суперників і водночас допомагати своїй команді, створюючи можливості для атаки.";
    x[2].innerHTML = "Приклад персонажів:";
    x[2].style.marginBottom = "0px";
    x[3].src = "images/Ogre_Magi_icon.webp";
    x[3].height = "60";
    x[3].width = "100";
    x[4].src = "images/night_stalker.png";
    x[4].height = "60";
    x[4].width = "100";
    x[5].src = "images/legion_commander.png";
    x[5].height = "60";
    x[5].width = "100";
    showText();
}


function MyFunction4() {
    let x = document.getElementsByClassName("demo");
    x[3].style.border = '2px solid #00680cb5'
    x[4].style.border = '2px solid #064210'
    x[5].style.border = '2px solid #5700b3a7'
    x[0].innerHTML = "Семi саппорт";
    x[1].innerHTML = "Роль, що поєднує функції підтримки та активного гравця. Вона дозволяє впливати на гру через ганки, створення хаосу для ворога та допомогу союзникам. Гравець на цій позиції має добре розуміти механіку гри та швидко адаптуватися до ситуації на карті. Четвірка часто є зв’язковою ланкою між керрі та мідером.";
    x[2].innerHTML = "Приклад персонажів:";
    x[2].style.marginBottom = "0px";
    x[3].src = "images/undying.png";
    x[3].height = "60";
    x[3].width = "100";
    x[4].src = "images/venomancer.png";
    x[4].height = "60";
    x[4].width = "100";
    x[5].src = "images/enigma.png";
    x[5].height = "60";
    x[5].width = "100";
    showText();
}

function MyFunction5() {
    let x = document.getElementsByClassName("demo");
    x[3].style.border = '2px solid #4d005d'
    x[4].style.border = '2px solid #005a92'
    x[5].style.border = '2px solid #670000'
    x[0].innerHTML = "Фул сап";
    x[1].innerHTML = "Це позиція, де гравець ставить командні інтереси вище за особисті. Саппорт допомагає керрі, ставить варди, забезпечує бачення карти та контролює ворогів. Основні завдання саппорта — підтримка союзників, контроль простору та створення умов для перемоги команди.";
    x[2].innerHTML = "Приклад персонажів:";
    x[2].style.marginBottom = "0px";
    x[3].src = "images/dazzle.png";
    x[3].height = "60";
    x[3].width = "100";
    x[4].src = "images/crystal_maiden.png"
    x[4].height = "60";
    x[4].width = "100";
    x[5].src = "images/lion.png";
    x[5].height = "60";
    x[5].width = "100";
    showText();
}
