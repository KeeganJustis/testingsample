const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage  Calculator', () => {
    let mortgage=null;
    
    beforeEach(() => {
        mortgage = new Mortgage(1000, 4, 15, 12);
        mortgage2 = new Mortgage(1000, 4, 30, 12);
        mortgage3 = new Mortgage(400000, 17, 15, 12);
      });
      it('should be a monthly payment function', () => {
        expect(mortgage.monthlyPayment).to.exist;
      });
      it('Calculate correct montly payment for 15 years', () => {
        expect(mortgage.monthlyPayment).to.equal("$7.40 is your payment");
      });
      it('Calculate correct montly payment for 30 years', () => {
        expect(mortgage2.monthlyPayment).to.equal("$4.77 is your payment");
      });
      it('Calculate correct montly payment for high amount', () => {
        expect(mortgage3.monthlyPayment).to.equal("$6156.02 is your payment");
      });
});