let test = document.getElementById('test'); // Берем элемент test

let p = document.createElement('p'); // создание p внутри div с классом theme__ask
p.setAttribute('class', 'theme__ask');

let div = document.createElement('div'); // создание  div с классом theme__answer left column
div.setAttribute('class', 'theme__answer left column')

// Обьявление массива quest с тестом
let quest = [
    {
        text: "1. Укажите процентное содержание биогенных химических веществ:",
        answers: ["98% ",
            "70%",
            "60%",
            "99,9%"],
        correctansw: 0
    },

    {
        text: "2. Макроэлементы в живых организмах составляют …",
        answers: ["50%",
            "1.9%",
            "1.8%",
            "4%"],
        correctansw: 1
    },

    {
        text: "3. К органогенным химическим элементам относятся:",
        answers: ["С",
            "Cl",
            "N",
            "Р"],
        correctansw: [0 , 2]
    },

    {
        text: "4. Какие из перечисленных элементов не являются макроэлементами:",
        answers: ["Mg",
            "Mo",
            "Cl",
            "Fe"],
        correctansw: [1, 3]
    },

    {
        text: "5. Химический элемент фосфор необходим для:",
        answers: ["Участвует в генерации биоэлектрических потенциалов",
            "Входит в состав АТФ, ДНК и других органических соединений",
            "Необходим для фотосинтеза у растений",
            "Входит в состав костной ткани и зубной эмали"],
        correctansw: [1 , 3]
    },

    {
        text: "6. Какой химический элемент входит в состав гемоглобина:",
        answers: ["Fe",
            "Mg",
            "Mo",
            "S"],
        correctansw: 0
    },

    {
        text: "7.  Микроэлемент I очень важен для работы :",
        answers: ["надпочечников",
            "сердца",
            "щитовидной железы",
            "печени"],
        correctansw: 2
    },

    {
        text: "8. Верно ли, что Co участвует в кроветворении и входит в состав витамина В11",
        answers: ["Да",
            "Нет"],
        correctansw: 1
    },

    {
        text: "9. Связывание азота клубеньковыми бактериями происходит благодаря",
        answers: ["Mg",
            "Co",
            "Mo",
            "Mn"],
        correctansw: 2
    },

    {
        text: "10. Назовите набор продуктов, в которых содержание Fe наибольшее",
        answers: ["злаки, бобовые, овощи",
            "гречка, мясо, бобовые, злаки",
            "молочные продукты",
            "печень, орехи, морепродукты, злаки"],
        correctansw: 1
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