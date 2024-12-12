const StrategyFactory = require('./src/factories/StrategyFactory');
const OldPaymentSystem = require('./src/legacy/OldPaymentSystem');
const OldPaymentAdapter = require('./src/strategies/OldPaymentAdapter');
const PaymentProcessor = require('./src/processors/PaymentProcessor');

(function runTests() {
    console.log('\n--- Factory Method Test ---');
    try {
        let paymentMethod = StrategyFactory.getPaymentStrategy('credit_card');
        let processor = new PaymentProcessor(paymentMethod);
        processor.processPayment(100);

        paymentMethod = StrategyFactory.getPaymentStrategy('paypal');
        processor = new PaymentProcessor(paymentMethod);
        processor.processPayment(200);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }

    console.log('\n--- Adapter Pattern Test ---');
    const oldPaymentSystem = new OldPaymentSystem();
    const adapter = new OldPaymentAdapter(oldPaymentSystem);
    const processor = new PaymentProcessor(adapter);
    processor.processPayment(300);

    console.log('\n--- Strategy Pattern Consistency Test ---');
    const strategies = [
        StrategyFactory.getPaymentStrategy('credit_card'),
        StrategyFactory.getPaymentStrategy('paypal')
    ];
    for (const strategy of strategies) {
        const processor = new PaymentProcessor(strategy);
        processor.processPayment(150);
    }

    console.log('\nAll tests passed!');
})();
