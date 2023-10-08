import React, { useState, useEffect } from "react";


// const x = {a: {b:1}}
// console.log(a.b) // a["b"]
function changeEmailFunc(items) {
    const results = [];
    for (let i = 0; i < items.length; i++) {
        const el = {...items[i]};
        switch (el.email) {
            case 'Eliseo@gardner.biz':
                el.email = 'Sincere@april.biz';
                break;
            case 'Jayne_Kuhic@sydney.com':
                el.email = 'Shanna@melissa.tv';
                break;
            case 'Nikita@garfield.biz':
                el.email = 'Nathan@yesenia.net';
                break;
            case 'Hayden@althea.biz':
                el.email = 'Julianne.OConner@kory.org';
                break;
            case 'Lew@alysha.tv':
                el.email = 'Lucio_Hettinger@annie.ca';
                break;
        }
        results.push(el);
    }
    return results;
}



// Task 1: Страницу поста оформить, вывести текст и список комментариев, и кнопку для каждого комментария - получить данные его автора
// Если данные пришли добавить автора в стейт в список авторов и вывести под комментарием его данные
// Task 2: После того, как запросили автора комментария и вывели его данные - под ними вывели и его заметки


// Оформить страницу так:
// 1) у каждого абзаца сделать только первую букву очень большой, жирной, и красного цвета
// 2) после каждого предложения долждна стоять точка и пробел, а первое слово в этом предложении должно начинаться с большой буквы
// 3) оформить красиво заголовок - текст подчеркнутый и с наколоном, голубого цвета и также начинается с большой буквы
// 4) для комментариев свойство "name" выводим полностью текст, а "body" обрезаем до 30(50) символов и добавляем "... more"
// 5) для автора помимо имени вывести city, street & suite
// 6) под именем автора вывести список его заметок, не весь, первые пять (https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
// 7) список тодос идет в столбик - 5 строк, напротив названия заметки показать статус ее выполнения(если да - V, если нет - Х)

export default () => {
    const [posts, setPosts] = useState([]);
    const [selectedId, setSelectedId] = useState(0);
    const [hasPrevPost, setHasPrevPost] = useState(false);
    const [firstTransition, setFirstTransition] = useState(false);
    const [comments, setComments] = useState([]);
    const [authors, setAuthors] = useState([]);

    const getPost = (postId) => {
        // Если использовать filter() Фильтруем по критерию(id), если в массиве не будет объекта - вернется пустой массив, 
        // если будет - массив с одним объектом
        const exists = posts.find(post => post.id === postId);
        // console.log('exists: ', exists);
        // if - else (если - иначе), if - else if - else(если - иначе если - иначе)
        if (exists) {
            setSelectedId(postId);
        } else {
            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
                method: "GET",
            })
            .then((response) => {
                if (response.status === 404) {
                    setHasPrevPost(false);
                } else if (response.status === 200) {
                    return response.json();
                }
            })
            .then((data) => {
              if (data && data !== undefined && data !== "undefined") {
                  const updatedPosts = [...posts.filter(post => post.id !== data.id), data];
                  setPosts(updatedPosts);
                  setSelectedId(postId);
                  if (postId === 1 && !firstTransition) {
                      setHasPrevPost(false);
                      setFirstTransition(true);
                  } else {
                      setHasPrevPost(true);
                  }
              } else {
                  console.log("NO DATA!");
              }
            });
        }
    };

    const getCommentsForPost = (postId) => {
        const exists = comments.find(comm => comm.postId === postId);
        // console.log('exists: ', exists, 'comments: ', comments); 
        if (exists) {
            console.log('Comments for this post already fetched!');
        } else {
            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {
                method: "GET",
            })
            .then((response) => {
              if (response.status === 200) {
                  return response.json();
              }
            })
            .then((data) => {
              if (data && data !== undefined && data !== "undefined") {
                  const updatedComments = [...comments.filter(comm => comm.postId !== postId), ...data];
                  // console.log('upda: ', updatedComments)
                  const mutatedList = changeEmailFunc(updatedComments);
                  setComments(mutatedList);
              } else {
                  console.log("NO COMMENTS DATA!");
              }
            });
        }
    };

    const getAuthorsData = () => {
        fetch(`https://jsonplaceholder.typicode.com/users`, {
            method: "GET",
        })
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            }
        })
        .then((data) => {
            if (data && data !== undefined && data !== "undefined") {
                // console.log('authors: ', data);
                setAuthors(data);
            } else {
                console.log("NO AUTHOR DATA!");
            }
        });
    };

    // Эта функция сейчас работает 1 раз при загрузке компонента на получение тодос для первого автора
    // а нужно по нажатию кнопки на авторе запрашивать его тодос, данные вывести в массив из таких объектов:
    // [{authorId: 1, todos: data}, {authorId: 2, todos: data}]
    const getTodos = () => {
        fetch(`https://jsonplaceholder.typicode.com/todos?userId=1`, {
            method: "GET",
        })
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            }
        })
        .then((data) => {
            if (data && data !== undefined && data !== "undefined") {
                console.log('todos: ', data);
            } else {
                console.log("NO TODOS DATA!");
            }
        });
    };

    useEffect(() => {
        getAuthorsData();
        getTodos();
    }, []);

    useEffect(() => {
        getPost(1);
    }, []);

    useEffect(() => {
        if (selectedId !== 0) {
            getCommentsForPost(selectedId);
        } else {
            console.log('No comments for post id=0')
        }
    }, [selectedId]);

    const currentPost = posts.find(p => p.id === selectedId);
    const commentsList = comments.filter(comm => comm.postId === selectedId);

    return (
        <div className="">
            <div className="">
                {hasPrevPost && (
                    <button className="button-next-prev" onClick={() => getPost(selectedId - 1)}>
                        PREV
                    </button>
                )}
                <button className="button-next-prev" onClick={() => getPost(selectedId + 1)}>
                    NEXT
                </button>
            </div>
            {
                currentPost ?
                <div className="mb-20px">
                    <h1>{currentPost.title}</h1>
                    <p>
                        <span>Молоко.</span>
                        <span>{currentPost.body}.</span>
                        <span>{currentPost.body}</span>
                        <span>{currentPost.body}</span>
                        <span>{currentPost.body}</span>
                        <span>{currentPost.body}</span>
                    </p>
                    <p>
                        <span>Хлеб.</span>
                        <span>{currentPost.body}</span>
                        <span>{currentPost.body}</span>
                        <span>{currentPost.body}</span>
                        <span>{currentPost.body}</span>
                        <span>{currentPost.body}</span>
                    </p>
                    <p>
                        <span>Груша.</span>
                        <span>{currentPost.body}</span>
                        <span>{currentPost.body}</span>
                        <span>{currentPost.body}</span>
                        <span>{currentPost.body}</span>
                        <span>{currentPost.body}</span>
                    </p>
                </div>
                :
                <div>No data</div>
            }

            {commentsList.length > 0 ? (
                <div className="mt-20px" key={`comments-list-for-post-${selectedId}`}>
                    <h2>Comments:</h2>
                    {
                        commentsList.map((comment) => {
                            // console.log('comm: ', comment);
                            const owner = authors.find(a => a.email === comment.email);
                            console.log('owner: ', owner)
                            return (
                                <div className="comment" key={comment.id}>
                                    <p className="fz16px-mb10px">{comment.name}</p>
                                    <p className="fz16px-mb10px">{comment.body}</p>
                                    {owner && (
                                        <div className="author-info">
                                            <p className="fz16px-mb10px">Author: {owner.name}</p>
                                        </div>
                                    )}
                                </div>
                            )
                        })
                    }
                </div>
            ) : (
                <div>No comments</div>
            )}
        </div>
    );
};




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