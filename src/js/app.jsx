import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance:'',
      rate:'',
      terms:'30',
      monthlypay:0
    };
    this.handleChangeB = this.handleChangeB.bind(this);
    this.handleChangeR = this.handleChangeR.bind(this);
    this.handleChangeT = this.handleChangeT.bind(this);
    this.calculate = this.calculate.bind(this);
  }
  
  
  handleChangeB(event) {
    this.setState({balance: event.target.value});
  }
  handleChangeR(event) {
    this.setState({rate: event.target.value});
  }
  handleChangeT(event) {
    this.setState({terms: event.target.value});
  }
  
  calculate() {
    
    var mrate = (this.state.rate/12)/100;
    var totalmonths = this.state.terms * 12;
    var monthlypay = this.state.balance * (mrate * Math.pow((1 + mrate),totalmonths) / (Math.pow(1 + mrate,totalmonths)-1));

    monthlypay = monthlypay.toFixed(2)

    this.setState({
      monthlypay: monthlypay
    })
  }
  
  
  render() {
    return (
      <div className='container'>

        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <h3 >Mortgage Calculator</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <h4 className="text-right">Loan Balance</h4>
          </div>
          <div className="col-md-6">
            <input name="balance" className="form-control" type="number" value={this.state.balance} onChange={this.handleChangeB}/>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <h4 className="text-right">Interest Rate (%)</h4>
          </div>
          <div className="col-md-6">
            <input name="rate" className="form-control" type="number" step="0.01" value={this.state.rate} onChange={this.handleChangeR}/>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <h4 className="text-right">Loan Terms (year)</h4>
          </div>
          <div className="col-md-6">
            <select name="term" className="form-control" value={this.state.terms} onChange={this.handleChangeT}>
              <option value="15">15</option>
              <option value="30">30</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-md-2 col-md-offset-3">
            <button name="submit" className="btn btn-primary btn-block" onClick={() => this.calculate()}>Calculate</button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div id="output" className="well">${this.state.monthlypay} is your payment.</div>
          </div>
        </div>

      </div>
    );
  }
}
