
import React, { useState, useEffect } from "react";

export default () => {
    const [posts, setPosts] = useState([]);
    const [selectedId, setSelectedId] = useState(0);
    const [hasPrevPost, setHasPrevPost] = useState(false);
    const [firstTransition, setFirstTransition] = useState(false);
    const [comments, setComments] = useState([]);
    const [authors, setAuthors] = useState({});

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
                  setComments(updatedComments);
              } else {
                  console.log("NO COMMENTS DATA!");
              }
            });
        }
    };

    const getAuthorData = (authorId) => {
        if (!authors[authorId]) {
            fetch(`https://jsonplaceholder.typicode.com/users/${authorId}`, {
                method: "GET",
            })
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                }
            })
            .then((data) => {
                if (data && data !== undefined && data !== "undefined") {
                    setAuthors((prevAuthors) => ({
                        ...prevAuthors,
                        [authorId]: data,
                    }));
                } else {
                    console.log("NO AUTHOR DATA!");
                }
            });
        }
    };

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
                    <p>{currentPost.id}</p>
                    <p>{currentPost.body}</p>
                </div>
                :
                <div>No data</div>
            }

            {commentsList.length > 0 ? (
                <div className="mt-20px" key={`comments-list-for-post-${selectedId}`}>
                    <h2>Comments:</h2>
                    {commentsList.map((comment) => (
                        <div className="comment" key={comment.id}>
                            <p className="fz16px-mb10px">{comment.name}</p>
                            <p className="fz16px-mb10px">{comment.body}</p>
                            <button className="author-button" onClick={() => getAuthorData(comment.userId)}>Get Author Data</button>
                            {authors[comment.userId] && (
                                <div className="author-info">
                                    <p className="fz16px-mb10px">Author: {authors[comment.userId].name}</p>
                                    <p className="fz16px-mb10px">Email: {authors[comment.userId].email}</p>
                                </div>
                            )}
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