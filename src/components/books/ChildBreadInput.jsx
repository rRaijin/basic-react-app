import { Component } from "react";
class ChildBreadInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            breadInput: false,
        };
    }
  
    handleInputChange = (event) => {
        const inputValue = event.target.value;
        this.setState({ inputValue });
        this.props.onTextChange(inputValue);
    }
  
    componentDidUpdate(prevProps) {
        if (prevProps.breadInput !== this.props.breadInput) {
            this.setState({ breadInput: this.props.breadInput });
        }
    }
  
    render() {
      return (
        <div>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            disabled={this.state.breadInput}
            />
        </div>
      );
    }
  }
export default ChildBreadInput;
