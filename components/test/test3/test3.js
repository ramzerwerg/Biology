let test = document.getElementById('test'); // Берем элемент test

let p = document.createElement('p'); // создание p внутри div с классом theme__ask
p.setAttribute('class', 'theme__ask');

let div = document.createElement('div'); // создание  div с классом theme__answer left column
div.setAttribute('class', 'theme__answer left column')

// Обьявление массива quest с тестом
let quest = [
    {
        text: "1. К неорганическим соединениям относят:",
        answers: ["вода",
            "щелочи",
            "неорганические кислоты",
            "микроэлнменты",
            "макроэлементы"],
        correctansw: [0, 2]
    },

    {
        text: "2. Наибольшую массу в теле человека составляют:",
        answers: ["вода",
            "неорганические соединения",
            "огранические соединения ",
            "макроэлементы"],
        correctansw: 1
    },

    {
        text: "3. В каких пределах колеблется содержание воды в организмах:",
        answers: ["20%-100%",
            "60%-98%",
            "70%-80%",
            "60%-75%"],
        correctansw: 2
    },

    {
        text: "4. Вещества по растворимости в воде бывают:",
        answers: ["гидрофильные",
            "гидрофольные",
            "гидрофобныей",
            "амфифобные"],
        correctansw: [0, 2]
    },

    {
        text: "5.Перемещение молекул воды через полупроницаемую мембрану из области с меньшей концентрацией вещества в область с более высокой концентрацией называется:",
        answers: ["тургоным давлением",
            "осмосом",
            "кислотностью",
            "гомеостаз",
            "экскреция"],
        correctansw: 1
    },

    {
        text: "6. ) Важными для живых организмов физическими свойствами воды являются:",
        answers: ["круговорот воды в природе",
            "максимальная плотность при 4°С",
            "высокая теплопроводность",
            "образование льда при 0°С"],
        correctansw: [1, 2]
    },

    {
        text: "7. ) По уровню кислотности растворы бывают:",
        answers: ["кислые",
            "соленые",
            "нейтральные",
            "средние"],
        correctansw: [0, 2]
    },

    {
        text: "8. Как называется раствор , в котором при изменении состава среды обеспечивается относительно постоянство концентрации ионов водорода",
        answers: ["кислый",
            "буферный",
            "гипертонический",
            "нейтральный"],
        correctansw: 1
    },

    {
        text: "9. Функции воды",
        answers: ["защитная",
            "транспортная",
            "теплоизоляционная",
            "структурная"],
        correctansw: [1,3]
    }]

// Функций для создания элемента fragment
function createlist() {
    let fragment = new DocumentFragment(); // создание нового фрагмента в документе

    for (let i = 0; i <= quest.length - 1; i++) { // Добавление в fragment элементов li (p, div(label, span, input))
        let num1 = i;

        let li = document.createElement('li');
        li.setAttribute('class', 'left column ');
        li.setAttribute('id', 'qest' + i);

        let p = document.createElement('p');
        p.setAttribute('class', 'theme__ask');
        p.innerHTML = quest[i].text;

        let div = document.createElement('div');
        div.setAttribute('class', 'theme__answer left column');

        for (let z = 0; z <= quest[i].answers.length - 1; z++) {
            let label = document.createElement('label');
            label.setAttribute('class', 'answer__check left');
            label.setAttribute('id', 'answ' + num1);
            label.innerHTML = quest[i].answers[z]

            let input = document.createElement('input');
            input.setAttribute('class', 'check__input');
            input.setAttribute('type', 'checkbox')

            let span = document.createElement('span');
            span.setAttribute('class', 'check__box')

            label.append(input);
            label.append(span);

            div.append(label);
        }

        li.append(p);
        li.append(div);

        fragment.append(li);
    }

    return fragment; // Возвращение значения функции createlist()
}
test.append(createlist()); // Добавление в text всех созданых элементов

// Проверка правильности ответов

function checktest() {
    let answcount = 0;
    let check = [],
        answnum = [];
    let qestnum = document.getElementById('quest' + k).div.label.input.getAttribute(checked);

    for (let z = 0; z <= quest.length - 1; z++) {
        check.push(0);
    }

    for (let k = 0; k <= quest.length - 1; k++) { // Просматриваем каждый вопрос
        for (let y = 0; y <= quest[k].answers.length; y++) { // проверяем в каждом вопросе кол-во и номер ответов ответов
            if (qestnum == true) { // кол-во ответов
                answcount += 1;
                answnum.push(y)
            }
        }
        // if (qestnum &&  ) {
        //     check[k] = 1;
        // }
    }
}