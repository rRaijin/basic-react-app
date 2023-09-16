import { useState, useEffect } from "react";


export default () => {
    const [item, setItem] = useState();
    const [selectedId, setSelectedId] = useState(0); // мы храним запрашенный id поста

    const getItem = (way) => {
        const selectedVal = way === 'next' ? selectedId + 1 : selectedId - 1; // 1, 2, 3
        fetch(`https://jsonplaceholder.typicode.com/posts/${selectedVal}`, {
            method: 'GET'
        })
        .then((response) => {
            console.log('resp: ', response);
            if (response.status === 404) { // 404 http error => no data
                setItem(); // обнуляем итем в стейте, так как дошли до начала списка
                setSelectedId(0); // обнуляем запрашиваемый id
                // мы ничего не передаем дальше в then(), т.е. "data" в 24 строке будет undefined
            } else if (response.status === 200) { // данные получены, а значит их можно сериализовать при помощи метода json() 
                return response.json();
            }
        })
        .then((data) => {
            if (data && data !== undefined && data !== 'undefined') {
                console.log('data: ', data);
                setItem(data);
                setSelectedId(selectedVal);
            } else {
                console.log('NO DATA!');
            }
        });
    }

    // 1. Не показывать кнопку prev если предыдущий итем не может быть запрошен( т.е. не должно быть /posts/0)
    // 2. При начальном монтировании компонента запросить первый пост, кнопки prev еще не будет, только next, появится только после перехода на 2й пост
    // 3. Вывести для полученного поста все его комментарии.(name, email, body)

    return (
        <div className=''>
            <div className=''>
                <button className='' onClick={() => getItem('prev')}>
                    PREV
                </button>
                <button className='' onClick={() => getItem('next')}>
                    NEXT
                </button>
            </div>
            {
                item ?
                <div className=''>
                    <h1>{item.title}</h1>
                    <p>{item.id}</p>
                    <p>{item.body}</p>
                </div> :
                <div>No data</div>
            }
            
        </div>
    )
}

// export default () => {
//     const [items, setItems] = useState([]);

//     // без зависимостей сработает как didMount - то есть 1 раз, при монтировании компонента
//     useEffect(() => {
//         console.log('use effect');
//         // выполняем чтение данных
//         fetch('https://jsonplaceholder.typicode.com/posts', { // /posts GET
//             method: 'GET'
//         })
//         .then(response => { // ответ откуда-то, или наш сервер или удаленній АПИ
//             // console.log('response: ', response)
//             // console.log('serialized: ', response.json())

//             // получаем готовіе сериализированніе данніе(в человеческом виде) или получаем ошибку если
//             // сериализация не возможна
//             return response.json();
//         })
//         .then(json => {
//             console.log('готовые данные: ', json);
//             setItems(json); // устанавливаем стейт
//         })
//         // const x = test();
//         // console.log('x: ', x);
//     }, []);

//     const test = () => 42;

//     console.log('items: ', items);

//     return (
//         <div className=''>
//             {
//                 items.length === 0 ?
//                 <div>No data</div> :
//                 <ul className='items-test'>
//                     {
//                         // Обходим массив, віводим item.title
//                         items.map(
//                             // map принимает в себя функцию, которая что-то делает с каждым элементом,
//                             // а она в себя принимает в качестве параметров сам элемент и его индекс(номер по порядку)
//                             // обязательным является только элемент
//                             (item, i) => {
//                                 return (
//                                     <div key={`element-${i}`}>
//                                         {item.title}
//                                     </div>
//                                 )
//                             }
//                         )
//                     }
//                 </ul>
//             }
//         </div>
//     )
// }