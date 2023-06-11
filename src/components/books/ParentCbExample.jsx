import { Component } from "react";

import ChildrenExample from './ChildrenExample';


class ParentCbExample extends Component {
    constructor() {
        super();
        this.state = {
            totalClicks: 0,
            showChildrenBtns: true
        };
        this.totalCountHandler = this.totalCountHandler.bind(this);
    }

    static getDerivedStateFromProps(prevProps, prevState) {
        if (prevState.totalClicks > 5) {
            return {
                ...prevState,
                showChildrenBtns: false
            }
        }
        return prevState
    }

    totalCountHandler(dataFromChildren) {
        this.setState({totalClicks: this.state.totalClicks + dataFromChildren});
    }

    render() {
        const items = [{name: 'korova', b: 2}, {name: 'koza', b: 4}];
        const { totalClicks, showChildrenBtns } = this.state;

        return(
            <div style={{border: '1px solid black', padding: '5px', margin: '10px 0'}}>
                <div>
                    Total clicks: {totalClicks}
                </div>
                {
                    items.map((el, j) => {
                        return (
                            <ChildrenExample
                                key={`animal_${j}`}
                                item={el}
                                showBtn={showChildrenBtns}
                                totalCountHandler={this.totalCountHandler}/>
                        )
                    })
                }
            </div>
        )
    }
}

export default ParentCbExample;
