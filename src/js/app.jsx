import React, { Component } from 'react';

// export default class App extends Component {
//   render() {
//     return (
//       <div className='App'>
//         It works!
      
// <h1>Mortgage Calculator</h1>
// <input name='principal' />
// <input name='interestRate' />
// <input name='loanTerm' />
// <select name='period'>
//   <option value='12'>Monthly</option>
//   <option value='4'>Quarterly</option>
// </select>
// <button id='calculate'>Calculate</button>
// <p id='output'></p>
// </div>
//     );
//   }
// }


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      principal: null,
      interestRate: null,
      loanTerm: null,
      period: null,
      monthlyPayment: null,
    };
    this.onChange = this.onChange.bind(this);
    this.calcMonthlyPayment = this.calcMonthlyPayment.bind(this);
  }
  onChange(e) {
    const target = e.target;
    const name = target.name;
    const value = parseFloat(target.value);

    this.setState({
      [[name]]: value,
    });
  }
  calcMonthlyPayment() {
    const monthlyInterest = (this.state.interestRate * 0.01) / this.state.period;
    const months = this.state.loanTerm * this.state.period;
    const expression = (1 + monthlyInterest) ** months;
    const result = this.state.principal * ((monthlyInterest * expression) / (expression - 1));
    this.setState({
      monthlyPayment: result.toFixed(2),
    });
  }

  render() {
    return (
      <div className='App'>
        <h1>Mortgage Calculator</h1>
        <input id='principal' name='principal' onChange={ this.onChange } />
        <input id='interestRate' name='interestRate' onChange={ this.onChange } />
        <input id='loanTerm' name='loanTerm' onChange={ this.onChange } />
        <select name='period' onChange={ this.onChange }>
          <option value='12'>Monthly</option>
          <option value='4'>Quarterly</option>
        </select>
        <button id='calculate' onClick={ this.calcMonthlyPayment }>Calculate</button>
        <p id='output'>{'$' + this.state.monthlyPayment }</p>
      </div>
    );
  }
}
