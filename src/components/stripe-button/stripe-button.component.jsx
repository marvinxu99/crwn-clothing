import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const onToken = token => {
  console.log(token);
  alert('payment successful');
}

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_LBnp367Zb5XklDLhtXFg1cgr00SIM9ArGv';

  return (
    <StripeCheckout 
      label='Pay Now'
      name='Crown Clothing Ltd'
      billingAddress
      shippingAddress
      //image='https://svgshare.com/i/CuZ.svg'
      image='https://cdn.pixabay.com/photo/2016/11/05/20/08/red-nosed-1801283_960_720.png'
      description={ `Your total is $${price}` }
      amount={ priceForStripe }
      panelLabel='Pay Now'
      token={ onToken }
      stripeKey={ publishableKey }
    />
  );
};

export default StripeCheckoutButton;
