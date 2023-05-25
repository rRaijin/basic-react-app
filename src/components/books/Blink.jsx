import { Component } from "react";
import MyInputComponent from "./MyInput";
import MyComponentSome3 from "./Some3";

// const [myInputName, setMyInputName] = useState('');

// state через чистую ф-ю
// const [position, ] = useState(1);

class MyComponent extends Component {
    constructor() {
        super();
        this.state = {
            position: 1,
            a: 0,
            Heart: 'https://e7.pngegg.com/pngimages/725/818/png-clipart-heart-simple-red-people-heart-outline.png'

        }
        this.some1 = this.some1.bind(this);
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


    // единственный обязательный метод - render
    render() {
        const {} = this.props;
        const b = 2;
        
        // console.log('Появление-2', this.state.position)
        console.log('this.state.animal: ', this.state.animal)

        return (
            <div className={`container self-slider`}>
                {/* <img src={`/slides/slide_${this.state.position}.jpg`} alt="" /> */}
                {/* <Sx pos={this.state.position}/> */}
                <button onClick={this.some1}>
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
