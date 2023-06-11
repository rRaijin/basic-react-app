import { Component } from 'react';

class AnyTextComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        inputText: '',
        textColor: 'black',
        fontSize: 16,
        displayedText: []
    };
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleColorChange = this.handleColorChange.bind(this)
    this.handleFontSizeChange = this.handleFontSizeChange.bind(this)
  }

  handleInputChange (event) {
    this.setState({ inputText: event.target.value });
  }

  handleColorChange (event)  {
    this.setState({ textColor: event.target.value });
  }

  handleFontSizeChange (event) {
    this.setState({ fontSize: event.target.value });
  }

  handleButtonClick () {
      const { inputText, textColor, fontSize, displayedText } = this.state;
      const textItem = (
        <p style={{ color: textColor, fontSize: fontSize + 'px' }}>
          {inputText}
        </p>
      );
      this.setState({ displayedText: [...displayedText, textItem], inputText: '' });
  }

  render() {
    const { inputText, textColor, fontSize, displayedText } = this.state;

    return (
      <div>
          <input type="text" value={inputText} onChange={this.handleInputChange} />
          <select value={textColor} onChange={this.handleColorChange}>
            <option value="black">Черный</option>
            <option value="red">Красный</option>
            <option value="blue">Синий</option>
            <option value="green">Зеленый</option>
          </select>
          <input type="number" value={fontSize} min="0" max="100" onChange={this.handleFontSizeChange} />
          <button onClick={this.handleButtonClick}>Add Text</button>

      <div>
        {displayedText.map((text, i) => (
          <div key={i}>{text}</div>
        ))}
      </div>
      </div>
    );
  }
}

export default AnyTextComponent;
