export const defaultPlanId = "pro"

export const pricingPlans = [
  /*{
    id: "free",
    name: "Free",
    description: "A free plan to get you started!",
    price: "$0",
    priceIntervalName: "per month",
    stripe_price_id: null,
    features: ["MIT Licence", "Fast Performance", "Stripe Integration"],
  },*/
  {
    id: "pro",
    name: "Pro",
    description:
      "A plan to test the purchase experience. Try buying this with the test credit card 4242424242424242.",
    price: "$5",
    priceIntervalName: "per month",
    stripe_price_id: "price_1RP67uFL9lxuf6jZwVxGybDr",
    stripe_product_id: "prod_SJjb3MSx3CfzCX",
    features: [
      "Everything in Free",
      "Support us with fake money",
      "Test the purchase experience",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description:
      "A plan to test the upgrade experience. Try buying this with the test credit card 4242424242424242.",
    price: "$15",
    priceIntervalName: "per month",
    stripe_price_id: "price_1RP6prFL9lxuf6jZ2Lbraa7I",
    stripe_product_id: "prod_SJkKV3DZWTmttb",
    features: [
      "Everything in Pro",
      "Try the 'upgrade plan' UX",
      "Still actually free!",
    ],
  },
]
