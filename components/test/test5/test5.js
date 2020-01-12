let test = document.getElementById('test'); // Берем элемент test

let p = document.createElement('p'); // создание p внутри div с классом theme__ask
p.setAttribute('class', 'theme__ask');

let div = document.createElement('div'); // создание  div с классом theme__answer left column
div.setAttribute('class', 'theme__answer left column')

// Обьявление массива quest с тестом
let quest = [
    {
        text: "1. Какие функции имеют белки:",
        answers: ["транспортная",
            "теплоизоляционная",
            "двигательныя",
            "запасающая"],
        correctansw: [0, 2,3]
    },

    {
        text: "2. Какие функции не выполняют белки:",
        answers: ["токсическая",
            "энектроизоляционная",
            "сигнальная ",
            "рецепторная"],
        correctansw: [1,3]
    },

    {
        text: "3. Назовите белки, которые выполняют транспортную функцию:",
        answers: ["инсулин",
            "глобулин",
            "опсин",
            "альбумин"],
        correctansw: [1,3]
    },

    {
        text: "4. Тубулин выполняет … функцию:",
        answers: ["защитную",
            "сигнальную"
            "двигательную",
            "рецепторную"],
        correctansw: 2
    },

    {
        text: "5.Инсулин в организме человека:",
        answers: ["регулирует количество сахара в крови",
            "регулирует количество глюкозы в крови",
            "регулирует количество глюкозы в клеточной жидкости"],
        correctansw: 1
    },

    {
        text: "6. Выберите белок, который выполняет сигнальную функцию:",
        answers: ["актин",
            "опсин",
            "антитоксины",
            "глюкогон"],
        correctansw: 1
    },

    {
        text: "7. ) Фибриноген выполняет … функцию:",
        answers: ["токсическую",
            "энергетическую",
            "защитную"],
        correctansw: 1
    },

    {
        text: "8. Кератин…",
        answers: ["входит в состав волос, ногтей, рогов и т.д.",
            "участвует в сопротивлении ядам",
            "связывает и присоединяет  СО2  и О2"],
        correctansw: 0
    },

    {
        text: "9. Биологические катализаторы называются",
        answers: ["гармоны",
            "ферменты",
            "секркты",
            "белки"],
        correctansw: 1
    },

    {
        text: "10. Восстановление белка после нарушения его структуры",
        answers: ["динатурация",
            "регенерация",
            "ренатурация",
            "дезнатурация"],
        correctansw: 2
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