import { useState } from 'react'
import { useSelector } from 'react-redux'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

import { selectCartTotal } from '../../store/cart/selector'
import { selectCurrentUser } from '../../store/user/selector'

import Button from '../Button'

const PaymentForm = () => {
  const stripe = useStripe()
  const elements = useElements()

  const [isProcessingPayment, setIsProcessingPayment] = useState(false)
  const amount = useSelector(selectCartTotal)
  const currentUser = useSelector(selectCurrentUser)

  const paymentHandler = async (e) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setIsProcessingPayment(true)

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json())

    console.log('response', response)

    const {
      paymentIntent: { client_secret },
    } = response

    const result = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Guest',
        },
      },
    })

    setIsProcessingPayment(false)

    if (result.error) {
      alert(result.error.message)
    } else if (result.paymentIntent.status === 'succeeded') {
      alert('Payment successful')
    }
  }

  return (
    <div className='payment-container'>
      <form onSubmit={paymentHandler} className='form-container'>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <Button
          className='payment-button'
          type='submit'
          buttonType='inverted'
          isLoading={isProcessingPayment}
        >
          Pay now
        </Button>
      </form>
      <style jsx>{`
        .payment-container {
          height: 300px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .form-container {
          height: 100px;
          min-width: 500px;
        }
      `}</style>
      <style global jsx>{`
        .payment-button {
          margin-top: 30px;
          margin-left: auto;
        }
      `}</style>
    </div>
  )
}

export default PaymentForm
