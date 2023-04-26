export default (props) => {
    const { genres, authors } = props;

    // {id: 4, title: 'Детектив'} - g
    // genre: [1, 2, 3], => item.genre
    const filteredGenres = genres.filter(g => item.genre.indexOf(g.id) !== -1);

    // variant 1   
    // внутри filter, в скобочках справа от стрелки стоит условие, возвращает boolean
    // filter возвращает отфильтрованный массив
    // const bookAuthor = authors.filter(a => a.id === 1)
    // const bookAuthor1 = authors.filter(k => k.id === item.author)[0];
    // console.log('bookAuthor1: ', bookAuthor1);
    const bookAuthor2 = authors.find(k => k.id === item.author);
    // console.log('bookAuthor2: ', bookAuthor2);
    // const bookStars = stars.find(s => s.id === item.star);


    // *****ДОМАШНЕЕ ЗАДАНИЕ***** ==> Решение писать под каждой задачей и выводить результат в консоль, как показано на 1м упражнении
    const task1 = [1, 'a', 5, null, false, 46, 1];
    // Задача 1 - Из массива - task1 - вернуть массив с числом 1
    // Решение:
    const solution_1 = task1.filter(x => x === 1);
    // console.log('solution_1: ', solution_1);

    // Задача 2 - Из массива - task1 - вернуть массив только чисел

    // Решение:
    const task1FilteredNambers = task1.filter(x => typeof x === "number")
    // console.log('task1FilteredNumbers: ', task1FilteredNambers);
    // Задача 3 - Из массива - task1 - вернуть массив только чисел и строк

    // const task1FilteredNambersAndString = task1.filter(x => typeof x === "number" || typeof x === "string");

    // метод массива, который проверяет переданный аргумент, что он состоит в этом массиве
    const task1FilteredNambersAndString = task1.filter(x => ['number', 'string'].includes(typeof x));
    // console.log('task1FilteredNumbersAndString:',task1FilteredNambersAndString)

    const myObjects = [1, 'a', {a: 1, b: 'cat'}, {}, {}, {a: 2, b: 45, c: 11}, {a: 1}];
    // Задача 4 - Из массива - myObjects - вернуть массив объектов
    // Решение:
    const onlyObjets = myObjects.filter(x => typeof x === 'object')
    // console.log('onlyObjets: ', onlyObjets);

    // Задача 5 - Из массива - myObjects - вернуть массив НЕ ПУСТЫХ объектов
    // Решение:
    // Итерироваться могут только строки и массивы, следовательно только они имееют свойство length 
    const notEmptyObjects = myObjects.filter(x => typeof x === 'object' && Object.keys(x).length != 0);
    // const a = {a: 1, b: 'cat'}
    // console.log('x', a.length)
    // console.log('notEmtyObjects: ', notEmptyObjects);

    // Задача 6 - Из массива - myObjects - вернуть массив объектов, у которых больше 2х свойств
    // материал для задачи 6 -> https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
    // Решение:
    const myArr1 = myObjects.filter(p => typeof p === 'object' && Object.values(p).length > 2);
    // console.log('myArr1: ', myArr1);

    // ************************
    // *** typeof вернет строковое представление типа переменной
    // И ТОЛЬКО когда выполняется условие слева от оператора лог. "и" (&&) тогда идет проверка правой части
    // const valA = () => 4 - 3;
    // const valB = () => 1 + 1;
    // // const y = () => ({a: 1, b: 2}); // возвращает объект
    // const y = () => ({a: valA(), b: valB()}); // возвращает объект
    // const propertyx2 = Object.keys(y()); // сначала выполняется внутренняя ф-я y(), потом родительская
    // function myPPP() {return 'kolbasa'} // объявление
    // console.log('my function call 1: ', myPPP()); // вызов
    // console.log('my function call 2: ', myPPP); // ???
    // console.log('propertyX2 : ', propertyx2);
    // const propertyY2 = Object.values(y());
    // console.log('propertyY2 : ', propertyY2);

    // function propertyx1() {console.log('OK!!!')} // стандартная ф-я
    // const propertyx1 = () => {console.log('OK!!!')} // чистая ф-я, без контекста
    // ************************

    // Задача 7 - Из массива - myObjects - НАЙТИ объект, у которого для одного из свойств значение 'cat'
    // материал для задачи 7 -> https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/values
    // Решение:
    const d = myObjects.find(x => {
        const isObject = typeof x === 'object'; // должен вернуть true
        const objValues = Object.values(x);
        const exists = objValues.indexOf('cat') !== -1; // проверяем при помощи метода indexOf что переданній аргумент является частью нашего массива [1, 'cat']
        if (isObject && exists) {
            return true
        }
    })    
    // console.log(d);

    // Домашнее задание 22.04.2023
    const task3 = [
        {
            a: 12,
            b: 'dog'
        },
        {
            a: 'cat',
            b: 5,
            c: 'abc'
        },
        {
            d: 90,
            a: 'tea'
        },
        {
            name: 'cat'
        },
        45,
        {x: 1, y: 34}
    ];
    // Задача 8: Вывести список объектов, у которых одно из свойств равно 'cat
    const findCat = task3.filter(x => {
        const isObject = typeof x === 'object'; 
        const objValues = Object.values(x);
        const exists = objValues.indexOf('cat') !== -1; 
        if (isObject && exists) {
            return true
        }
    })    
    // console.log('cat: ',findCat);
    // Задача 9: Вывести список объектов, у которых все свойства равны числам
    const findNumber = task3.filter(x => {
        const isObject = typeof x === 'object';
        if (isObject) {
            const objValues = Object.values(x);
            // console.log('results: ', objValues);
            // const d = [1, 3, 23, 'a'];
            const allNUmbers = objValues.length === objValues.filter(k => typeof k === 'number').length;
            return allNUmbers;
        } else {
            return false
        }
    })    
    // console.log('number: ',findNumber);

    // Задача 10: Получить объект, у которого свойство "a" равно 12
    const findNumber2 = task3.find(x => x.a === 12);
    // console.log('findNumber2: ', findNumber2);

    // Задача 11: Получить объект, у которого свойство "a" равно 15
    const findNumber3 = task3.find(x => x.a === 15);
    // console.log('findNumber3: ', findNumber3);

    return <div>Lessons</div>
}