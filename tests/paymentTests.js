const StrategyFactory = require('../src/factories/StrategyFactory');
const OldPaymentSystem = require('../src/legacy/OldPaymentSystem');
const OldPaymentAdapter = require('../src/strategies/OldPaymentAdapter');
const PaymentProcessor = require('../src/processors/PaymentProcessor');

(function runTests() {
    console.log('\n--- Running Payment Tests ---');

    // Factory Method Test
    let processor;
    let paymentMethod = StrategyFactory.getPaymentStrategy('credit_card');
    processor = new PaymentProcessor(paymentMethod);
    processor.processPayment(100);

    paymentMethod = StrategyFactory.getPaymentStrategy('paypal');
    processor = new PaymentProcessor(paymentMethod);
    processor.processPayment(200);

    // Adapter Pattern Test
    const oldPaymentSystem = new OldPaymentSystem();
    const adapter = new OldPaymentAdapter(oldPaymentSystem);
    processor = new PaymentProcessor(adapter);
    processor.processPayment(300);

    console.log('\nAll tests passed!');
})();
