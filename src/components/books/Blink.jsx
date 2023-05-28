import { Component } from "react";
import MyInputComponent from "./MyInput";
import MyComponentSome3 from "./Some3";
import AnimalInfo99, {myConst} from "./AnimalInfo";
// import AnimalData from "./Animal-Data";

// const [myInputName, setMyInputName] = useState('');

// state через чистую ф-ю
// const [position, ] = useState(1);

class MyComponent extends Component {
    constructor() {
        super();
        this.state = {
            position: 1,
            a: 0,
            Heart: 'https://e7.pngegg.com/pngimages/725/818/png-clipart-heart-simple-red-people-heart-outline.png',
            fontSize: 20,
            textareaValue: ''
        }
        this.some1 = this.some1.bind(this);
        this.changeFontSizeHandler = this.changeFontSizeHandler.bind(this);
        const x = 45;
    }

// class MyComponentHeart extends Component {
//     constructor() {
//         super();
//         this.state = {
//             Heart: 'https://e7.pngegg.com/pngimages/725/818/png-clipart-heart-simple-red-people-heart-outline.png'
//         }
//     }
// }



    // UNSAFE_componentWillMount() {
    //     console.log('Я собираюсь появиться!-1')
    // }

    componentDidMount() {
        // console.log('Я появился!!!');
        const c = 3;
        setInterval(() => {
            if (this.state.position < 6) {
                this.setState({position: this.state.position + 1})
            } else {
                this.setState({position: 1})
            }
        }, 8000);
    }

    some1() {
        const a = 1;
        console.log('st: ', this)
    }

    some2() {
        console.log('st: ', this)
    }

    // если бы был фугкциональный компонент
    // const [position, setPosition] = useState(1);

    sx = () => {
        console.log('aaa')
    }

    handleClick = () => {
        this.setState({
            a: 2
        })
    }

    HeartClick = () => {
        const newHeart = this.state.Heart === 'https://e7.pngegg.com/pngimages/725/818/png-clipart-heart-simple-red-people-heart-outline.png' ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png' : 'https://e7.pngegg.com/pngimages/725/818/png-clipart-heart-simple-red-people-heart-outline.png'
        this.setState({Heart : newHeart});
    }

    changeFontSizeHandler() {
        this.setState({fontSize: 30})
    }

    changeFontSizeHandlerReverse() {
        this.setState({fontSize: 20})
    }

    changeTextareaValueHandler = (e) => {
        const val = e.target.value;
        console.log('val: ', val);
        this.setState({textareaValue: val});
    }

    // единственный обязательный метод - render
    render() {
        const {} = this.props;
        const b = 2;
        
        // console.log('Появление-2', this.state.position)
        console.log('this.state.animal: ', this.state.animal)

        // домашняя работа 1
        const animals = [
            {kind: 'cat', name: 'klyaksa', age: 1},
            {
                kind: 'Dog',
                name: 'Persik',
                age: 2
            }
        ];

        // домашняя работа 2.1 Мапнуть массив из двух объектов, на каждой итерации вернуть собственный компонент
        const plants = [{kind: "tree", name: "elka", height: 3}, {kind: "flower", name: "romashka", height: 0.2}]

        // домашняя работа 2.2 Написать <input>, просто менящий значение в state и выводящий его console.log, хэндлер не на чистой функции

        return (
            <div className={`container self-slider`}>
                {/* <p className={`font-20`} onMouseEnter={this.changeFontSizeHandler}>Some text for example</p> */}
                <p
                    className={`font-${this.state.fontSize}`} // Динамический параметр из стейта
                    onMouseEnter={this.changeFontSizeHandler}
                    onMouseLeave={this.changeFontSizeHandlerReverse.bind(this)}>
                    Some text for example
                </p>

                {/* <img src={`/slides/slide_${this.state.position}.jpg`} alt="" /> */}
                {/* <Sx pos={this.state.position}/> */}
                {/* <button onClick={this.some1}>
                    test
                </button>
                <button onClick={this.some2.bind(this)}>
                    test2
                </button>
                <button onClick={this.handleClick}>
                    Купить
                </button>
                <MyInputComponent/>
                <MyComponentSome3/>
                <div>
                    <h4>Kind: {myAnimal.kind}</h4>
                    <p>Name: {myAnimal.name}</p>
                    <p>Age: {myAnimal.age}</p>
                </div> */}

{/* homework task 1 */}
                {
                    plants.map((item, i) => {
                        return (
                            <div>
                                {/* <p>{item.kind}</p> */}
                                {/* кнопка по нажатию меняет цвет заголовка h1 на любой другой и при повторном длеает это обратно */}
                                {/* <button onClick={}>
                                    Change color
                                </button> */}
                            </div>
                        )
                    })
                }


{/* homework task 2 */}
                <textarea onChange={this.changeTextareaValueHandler} value={this.state.textareaValue}></textarea>
                {
                    this.state.textareaValue === 'Пылесос' &&
                    <div>РАБОТАЕТ!!!!!!</div>
                }


                {
                    animals.map((animalItem, i) => {
                        return (
                            <AnimalInfo99 animal={animalItem} key={`animal-${i}`}/>
                        )
                    })
                }

                <div>
                    <button className="border-0 back-white " onClick={this.HeartClick}>
                        изменить
                        <img className="w-2p" src={this.state.Heart} alt="" />
                    </button>
                </div>
            </div>
        )
    }
}

const Sx = ({pos}) => <img src={`/slides/slide_${pos}.jpg`} alt="" />

export default MyComponent;