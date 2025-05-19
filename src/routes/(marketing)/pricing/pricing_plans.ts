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
    name: "Monthly",
    description:
      "",
    price: "$29.99,
    priceIntervalName: "per month",
    stripe_price_id: "price_1RP67uFL9lxuf6jZwVxGybDr",
    stripe_product_id: "prod_SJjb3MSx3CfzCX",
    features: [
      "Unlimited AI consultations",
      "24/7 availability",
      "Research-based recommendations",
      "Cancel anytime"
    ],
  },
  {
    id: "enterprise",
    name: "Annual",
    description:
      "Save 20%",
    price: "$23.99",
    priceIntervalName: "per month",
    stripe_price_id: "price_1RP6prFL9lxuf6jZ2Lbraa7I",
    stripe_product_id: "prod_SJkKV3DZWTmttb",
    features: [
      "All Monthly Features",
      "Priority support",
      "Exclusive content",
      "Personalized insights"
    ],
  },
]
