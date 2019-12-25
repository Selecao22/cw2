import React from 'react';

class EasyLab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {v1: 0, v2: 0, res: 0};

    this.handleChangev1 = this.handleChangev1.bind(this);
    this.handleChangev2 = this.handleChangev2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangev1(event) {
    this.setState({v1: +event.target.value});
  }

  handleChangev2(event) {
    this.setState({v2: +event.target.value});
  }

  handleSubmit(event) {
    if (Number.isInteger(this.state.v1) && Number.isInteger(this.state.v2) && this.state.v2 > 0) {
      //alert('Отправленное имя: ' + Math.pow(this.state.v1, this.state.v2));
      this.setState({res: Math.pow(this.state.v1, this.state.v2)});
    } else {
      alert('Ошибка');
    }
    
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Число:
          <input id = "num"type="text" value={this.state.v1} onChange={this.handleChangev1} />
          Степень:
          <input id = "deg"type="text" value={this.state.v2} onChange={this.handleChangev2} />
        </label>
        <input id = "but"type="submit" value="Отправить" />
        Результат:
        <input id = "res" type="text" value={this.state.res} />
      </form>
    );
  }
}

export default EasyLab;