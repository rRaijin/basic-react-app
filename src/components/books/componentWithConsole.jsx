import { withConsole } from "../../hocs/withConsoleLog";

const ComponentWithConsole = (props) => {
    if (props) {
        console.log('props:   ',props)
    }
    return(
        <div>
            x
        </div>
    )
}

export default withConsole(ComponentWithConsole)