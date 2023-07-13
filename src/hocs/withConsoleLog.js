
export const withConsole = (Comp) => {
    function ComponentWithXVal(props) {
        return (
            <Comp {...props} x={2}/>
        )
    }
    return ComponentWithXVal
}