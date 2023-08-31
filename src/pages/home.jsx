import { useState, useEffect } from "react";

export default () => {
    const [items, setItems] = useState([]);

    // без зависимостей сработает как didMount - то есть 1 раз, при монтировании компонента
    useEffect(() => {
        console.log('use effect');
        // выполняем чтение данных
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'GET'
        })
        .then(response => { // ответ откуда-то, или наш сервер или удаленній АПИ
            // console.log('response: ', response)
            // console.log('serialized: ', response.json())

            // получаем готовіе сериализированніе данніе(в человеческом виде) или получаем ошибку если
            // сериализация не возможна
            return response.json();
        })
        .then(json => {
            console.log('готовые данные: ', json);
            setItems(json); // устанавливаем стейт
        })
        // const x = test();
        // console.log('x: ', x);
    }, []);

    const test = () => 42;

    console.log('items: ', items);

    return (
        <div className=''>
            {
                items.length === 0 ?
                <div>No data</div> :
                <ul className='items-test'>
                    {
                        // Обходим массив, віводим item.title
                        items.map(
                            // map принимает в себя функцию, которая что-то делает с каждым элементом,
                            // а она в себя принимает в качестве параметров сам элемент и его индекс(номер по порядку)
                            // обязательным является только элемент
                            (item, i) => {
                                return (
                                    <div key={`element-${i}`}>
                                        {item.title}
                                    </div>
                                )
                            }
                        )
                    }
                </ul>
            }
        </div>
    )
}