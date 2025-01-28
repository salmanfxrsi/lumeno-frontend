import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const handleOnSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }
  };

  return (
    <form className="container mx-auto my-36" onSubmit={handleOnSubmit}>
      <CardElement
        className="border-2 border-black rounded-2xl p-8"
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "black",
              "::placeholder": {
                color: "black",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        type="submit"
        className="flex items-center gap-1 bg-[#ABEF5F] font-black uppercase w-[144px] px-12 py-3 text-sm text-black transition-colors duration-300 transform rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none mt-8"
        disabled={!stripe}
      >
        Pay Now
      </button>
      <p className="text-red-600">{error}</p>
    </form>
  );
};

export default CheckoutForm;
