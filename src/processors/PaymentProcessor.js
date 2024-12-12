class PaymentProcessor {
    constructor(strategy) {
        this.strategy = strategy;
    }

    processPayment(amount) {
        this.strategy.pay(amount);
    }
}

module.exports = PaymentProcessor;
