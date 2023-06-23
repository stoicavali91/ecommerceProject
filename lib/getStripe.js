import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStripe = () => {
  //error function: if stripePromise doesn't yet exist, we set it to loadStripe
  if (!stripePromise){
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  }
  return stripePromise;
}

export default getStripe;