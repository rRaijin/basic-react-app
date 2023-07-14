import { withConsole } from "../../hocs/withConsoleLog";
import { withABShow } from "../../hocs/withAbMockTest";

const ComponentWithConsole = (props) => {
    console.log('props in comp: ', props)
    return(
        <div className={props.bgColor}>
            x
        </div>
    )
}

export default withConsole(ComponentWithConsole);

export const ABComponent = withABShow((props) => {
    console.log('props 2: ', props);

    return (
        <div className="">
            <div>MAIN CONTENT</div>
            <div>
                {props.reklama}
            </div>
        </div>
    )
});
