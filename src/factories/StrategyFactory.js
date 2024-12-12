const CreditCardPayment = require('../strategies/CreditCardPayment');
const PayPalPayment = require('../strategies/PayPalPayment');

class StrategyFactory {
    static getPaymentStrategy(method) {
        if (method === 'credit_card') {
            return new CreditCardPayment();
        } else if (method === 'paypal') {
            return new PayPalPayment();
        } else {
            throw new Error('Unsupported payment method');
        }
    }
}

module.exports = StrategyFactory;
