module.exports = class Mortgage {
    constructor(principal, interest, term, period) {
      this.principal = principal;
      this.interest = interest;
      this.term = term;
      this.period = period;
    }
  
    get monthlyPayment() {
      // this getter should return the result of your monthly payment calculation
      // used in a previous assignment.
    
    let Monthlyrate = (((this.interest) / 100))/this.period;
    let termlength = (this.term*this.period);
    let upper = Monthlyrate*(Math.pow((1+Monthlyrate),termlength));
    let lower = (Math.pow((1+Monthlyrate),termlength)-1);
    var monthly = this.principal* (upper / lower);
    var payment = '$' + monthly.toFixed(2) + " is your payment";
    
    return payment;

    }
  }