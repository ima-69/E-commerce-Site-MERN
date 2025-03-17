import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPalButton = ( { amount, onSuccess, onError } ) => {
  return (
    <PayPalScriptProvider
        options={{
            "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID 
        }}
    >
        <PayPalButtons 
            style={{layout: "vertical"}}
            createOrder={(data, actions) => {
                console.log("Creating order", amount);  // Debugging line to check amount
                return actions.order.create({
                    purchase_units: [{ amount: { value: amount } }]  // Fixed typo here: 'amount' instead of 'amout'
                });
            }}
            onApprove={(data, actions) =>{
                return actions.order.capture().then(onSuccess);
            }}
            onError={onError}
        />
    </PayPalScriptProvider>
  )
}

export default PayPalButton
