let test = document.getElementById('test'); // Берем элемент test

let p = document.createElement('p'); // создание p внутри div с классом theme__ask
p.setAttribute('class', 'theme__ask');

let div = document.createElement('div'); // создание  div с классом theme__answer left column
div.setAttribute('class', 'theme__answer left column')

// Обьявление массива quest с тестом
let quest = [
    {
        text: "1. Какие из приведенных уровней не являются уровнями организации жизни:",
        answers: ["молекулярный",
            "атомный",
            "биоценотический",
            "популяционно-видовой",
            "системно-тканевый"],
        correctansw: [1, 4]
    },

    {
        text: "2. Какие пункты являются признаками живого:",
        answers: ["клеточное строение",
            "интелектуальность",
            "размножение",
            "саморегуляция",
            "рефлекторность"],
        correctansw: [0, 2, 3]
    },

    {
        text: "3. Клеточное строение подразумевает, что:",
        answers: ["клетки состоят из цитоплазмы, клеточной оболочки и органоидов",
            "структурной и функциональной единицей живых организмов является клетка(п)",
            "живые организмы могут состоять из клеток",
            "живые организмы могут состоять из клеток"],
        correctansw: 1
    },

    {
        text: "4. Какие типы питания существуют:",
        answers: ["фотосинтетический",
            "автотрофный",
            "смешанный",
            "гетеротрофный",
            "дыхание"],
        correctansw: [1, 4]
    },

    {
        text: "5. Способность поддерживать постоянство своего химического состава и интенсивность протекания физиологических процессов у живых организмов называется:",
        answers: ["обмен веществ",
            "гомеостаз",
            "саморегуляция",
            "экскреция",
            "экскреция"],
        correctansw: 2
    },

    {
        text: "6. Какие из приведенных примеры являются примерами подвижности:",
        answers: ["камень сдвинулся с места во время землетрясения",
            "цветы вьюнка закрываются перед дождем",
            "горшок с цветком упал на пол",
            "человек моргнул",
            "листочки осины «трепещут» на ветру"],
        correctansw: [1, 3]
    },

    {
        text: "7. Что происходит с сосудами человека, когда он стоит на морозе:",
        answers: ["сужаются(п)",
            "расширяются",
            "остаются неизменными",
            "поочередно то сужаются, то расширяются для того, чтобы быстро согреть организм"],
        correctansw: 1
    },

    {
        text: "8. Изменчивость – это...",
        answers: ["способность организмов передавать потомкам свои признаки и свойства в изменённом виде",
            "особенности строения, жизнедеятельности и поведения, обеспечивающие выживание и размножение в определённой среде",
            "эволюционное развитие вида",
            "способность организмов приобретать новые свойства и признаки"],
        correctansw: 3
    },

    {
        text: "9. Как расшифровывается АТФ",
        answers: ["аденинтифосфорная кислота",
            "амоксициклинтриофосфорная кислота",
            "аденинтрифосфорная кислота(п)",
            "амоксициклинтрифосфорная кислота"],
        correctansw: 2
    },

    {
        text: "10. Что такое онтогенез",
        answers: ["постоянство внутренней среды",
            "способность организмов воспроизводить себе подобных",
            "способность к росту и индивидуальному развитию",
            "индивидуальное развитие от зиготы до смерти"],
        correctansw: 3
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