let test = document.getElementById('test'); // Берем элемент test

let p = document.createElement('p'); // создание p внутри div с классом theme__ask
p.setAttribute('class', 'theme__ask');

let div = document.createElement('div'); // создание  div с классом theme__answer left column
div.setAttribute('class', 'theme__answer left column')

// Обьявление массива quest с тестом
let quest = [
    {
        text: "1.Что такое аминокислоты:",
        answers: ["органические соединения, содержащие группу аминогруппу и карбоксильную группу ",
            "органические соединения, которые проявляют как кислотные, так и основные свойства",
            "органические соединения, которые могут входить в состав белков",],
        correctansw: 0
    },

    {
        text: "2. Белки по составу бывают",
        answers: ["протеины",
            "сложные",
            "монополимерные",
            "аминокислотные"],
        correctansw: [0, 1]
    },

    {
        text: "3. Аминокислоты бывают:",
        answers: ["простые",
            "кислые",
            "нейтральные",
            "сложные"],
        correctansw: [1, 2]
    },

    {
        text: "4. Какие связи характерны для первичной структуры белков:",
        answers: ["водородные",
            "ионные",
            "межмолекулярные",
            "пептидные"],
        correctansw: 3
    },

    {
        text: "5. 5) Признаками вторичной структуры белков являются	:",
        answers: ["α спирали",
            "глобула",
            "β спирали",
            "линейная последовательность аминокислот"],
        correctansw: [0, 2]
    },

    {
        text: "6. Выберите белки, которые имеют третичную структуру:",
        answers: ["кератин",
            "миоглобин",
            "гемоглобин",
            "трипсин"],
        correctansw: [1, 2]
    },

    {
        text: "7.  7) Выберите то, что соответствует четвертичной структуре белков:",
        answers: ["пептидная спираль образует глобулу",
            "примером белка является гемоглобин",
            "для четвертичной структуры характерны ионные, межмолекулярные и др. связи"],
        correctansw: [1, 2]
    },

    {
        text: "8. Незаменимыми аминокислотами для взрослого человека являются",
        answers: ["треонин",
            "аргенин",
            "аланин"],
        correctansw: 0
    },

    {
        text: "9. Если пептидной связью соединяются 10 и более аминокислот, то такое соединение называется",
        answers: ["дипептидом",
            "олигопептидом",
            "полипептидом",
            "пептидом"],
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