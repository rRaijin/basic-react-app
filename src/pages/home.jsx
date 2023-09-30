
import React, { useState, useEffect } from "react";

export default () => {
     const [posts, setPosts] = useState([]);
     const [selectedId, setSelectedId] = useState(0);
     const [hasPrevPost, setHasPrevPost] = useState(false);
     const [firstTransition, setFirstTransition] = useState(false);
     const [comments, setComments] = useState([]);

     const getPost = (postId) => {
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
             const updatedPosts = [...posts, data];
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
     };

     const getCommentsForPost = (postId) => {
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
              setComments(data);
          } else {
              console.log("NO COMMENTS DATA!");
          }
        });
  };

  useEffect(() => {
    // При начальном монтировании компонента запросить первый пост и его комментарии
    getPost(1);
    getCommentsForPost(1);
  }, []);

  useEffect(() => {
    // При изменении выбранного поста, запросить его комментарии
    getCommentsForPost(selectedId);
  }, [selectedId]);

  return (
      <div className="">
          <div className="">
              {hasPrevPost && (
                <button className="" onClick={() => getPost(selectedId - 1)}>
                  PREV
                </button>
              )}
              <button className="" onClick={() => getPost(selectedId + 1)}>
                NEXT
              </button>
          </div>
          {posts.length > 0 ? (
            <div className="">
              <h1>{posts[selectedId - 1].title}</h1>
              <p>{posts[selectedId - 1].id}</p>
              <p>{posts[selectedId - 1].body}</p>
            </div>
          ) : (
            <div>No data</div>
          )}

          {comments.length > 0 ? (
            <div>
              <h2>Comments:</h2>
              {comments.map((comment) => (
                <div key={comment.id}>
                  <p>{comment.name}</p>
                  <p>{comment.body}</p>
                </div>
              ))}
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