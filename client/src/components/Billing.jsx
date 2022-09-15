import StripeCheckout from "react-stripe-checkout"
import {Button} from '@chakra-ui/react'
import { connect } from "react-redux/es/exports"
import { handleToken } from "../actions"

const Billing = (props) => {
  return (
    <StripeCheckout
    name='Feedback Loop'
    description="$5 for 5 email credits"
    amount={500}
    token={token=>props.handleToken(token)}
    stripeKey={process.env.NODE_ENV ===' production'? process.env.VITE_STRIPE_PUBLISHABLE_KEY : import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY }
    >
      <Button
      bgColor={'gray.300'}
      color='#ff6d60'
      >Add credits</Button>
    </StripeCheckout>
    )
}

export default connect(null,{handleToken})(Billing)