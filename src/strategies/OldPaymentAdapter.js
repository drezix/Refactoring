const PaymentStrategy = require('./PaymentStrategy');

class OldPaymentAdapter extends PaymentStrategy {
    constructor(oldSystem) {
        super();
        this.oldSystem = oldSystem;
    }

    pay(amount) {
        this.oldSystem.oldPay(amount);
    }
}

module.exports = OldPaymentAdapter;
