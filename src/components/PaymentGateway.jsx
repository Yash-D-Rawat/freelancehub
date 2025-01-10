import React, { useState } from 'react';

function PaymentGateway() {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [cardHolderName, setCardHolderName] = useState('');

    const handlePayment = (e) => {
        e.preventDefault();
        // Normally, you would send this data to your backend for processing
        console.log({
            cardNumber,
            expiryDate,
            cvv,
            cardHolderName
        });
        alert('Payment processed successfully (simulation)');
    };

    return (
        <div className='w-[80%]'>
            
        </div>
    );
}

export default PaymentGateway;
