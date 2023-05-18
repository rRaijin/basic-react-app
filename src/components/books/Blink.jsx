import { Component } from "react";

// const [myInputName, setMyInputName] = useState('');

// state через чистую ф-ю
// const [position, ] = useState(1);

class MyComponent extends Component {
    constructor() {
        super();
        this.state = {
            position: 1,
            animal: null
        }
        this.some1 = this.some1.bind(this);
        const x = 45;
    }

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

    some3 = () => {
        // console.log('st: ', this);
        this.setState({
            animal: 'cat'
        });

        // setPosition(2)
    }

    // если бы был фугкциональный компонент
    // const [position, setPosition] = useState(1);

    sx = () => {
        console.log('aaa')
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
                <button onClick={this.some3}>
                    some3
                </button>
            </div>
        )
    }
}

const Sx = ({pos}) => <img src={`/slides/slide_${pos}.jpg`} alt="" />

export default MyComponent;
