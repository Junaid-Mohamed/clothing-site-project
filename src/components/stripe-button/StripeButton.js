import React from 'react'
import StripeCheckout from "react-stripe-checkout" // this library levarages us to use react with stripe, by just binding some labels 

function StripeButton({price}) {

    const priceForStripe = price*100 // stripe rerquires price in terms of cents. 
    const publishableKey = "pk_test_51HfSOvHDjyI5rguOK2DglLJeVYCyxcoHwG6JfzH17tDoNbiEDFTKUvwVC62GiT8jOfip7Nio97oQ5r2rqn5CghRL00WVQxg7VN"

    const onToken = token =>{
        console.log(token); // this token is used to make a charge in the backend. but here we aren't using.
        alert("Payment Successfull")
    }

    return (
        <div>
            <StripeCheckout 
                label="Pay Now"
                name="Clothing Ltd."
                billingAddress
                shippingAddress
                image='https://sendeyo.com/up/d/f3eb2117da'
                description={`Your total price is ${price}`}
                amount={priceForStripe}
                panelLabel="Pay Now"
                token={onToken}
                stripeKey={publishableKey}
            /> 
             {/* can checkout various props that can be passed */}
        </div>
    )
}

export default StripeButton

