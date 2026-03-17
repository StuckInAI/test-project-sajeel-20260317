const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Perfect for individuals and side projects.",
    features: [
      "3 Projects",
      "1 GB Storage",
      "Community support",
      "Basic analytics",
      "Shared CDN",
      "1 team member",
    ],
    cta: "Get Started",
    highlighted: false,
    badge: null,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For professional developers and growing teams.",
    features: [
      "Unlimited Projects",
      "50 GB Storage",
      "Priority support",
      "Advanced analytics",
      "Global CDN",
      "Up to 10 team members",
      "AI Assistance",
      "Custom domains",
    ],
    cta: "Start Pro Trial",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "/month",
    description: "For large teams with advanced requirements.",
    features: [
      "Everything in Pro",
      "Unlimited Storage",
      "Dedicated support",
      "Custom analytics",
      "Dedicated CDN nodes",
      "Unlimited team members",
      "SSO & SAML",
      "SLA guarantee",
      "On-premise option",
    ],
    cta: "Contact Sales",
    highlighted: false,
    badge: null,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 text-primary-600 bg-primary-50 border border-primary-100">
            Pricing
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Simple,{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #0ea5e9 0%, #d946ef 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              transparent
            </span>{" "}
            pricing
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            No hidden fees. No surprises. Scale as you grow and only pay for what you use.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`card-hover relative rounded-2xl p-8 border ${
                plan.highlighted
                  ? "border-transparent shadow-2xl text-white"
                  : "border-gray-200 bg-white shadow-sm"
              }`}
              style={
                plan.highlighted
                  ? {
                      background:
                        "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)",
                      boxShadow: "0 25px 50px -12px rgba(14,165,233,0.25)",
                    }
                  : {}
              }
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-sm font-semibold text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, #0ea5e9 0%, #d946ef 100%)",
                  }}
                >
                  {plan.badge}
                </div>
              )}

              {/* Plan Name */}
              <div
                className={`text-sm font-semibold uppercase tracking-widest mb-3 ${
                  plan.highlighted ? "text-blue-300" : "text-primary-600"
                }`}
              >
                {plan.name}
              </div>

              {/* Price */}
              <div className="flex items-end gap-1 mb-3">
                <span
                  className={`text-5xl font-extrabold ${
                    plan.highlighted ? "text-white" : "text-gray-900"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`text-lg mb-2 ${
                    plan.highlighted ? "text-white/60" : "text-gray-400"
                  }`}
                >
                  {plan.period}
                </span>
              </div>

              {/* Description */}
              <p
                className={`text-sm mb-8 ${
                  plan.highlighted ? "text-white/70" : "text-gray-500"
                }`}
              >
                {plan.description}
              </p>

              {/* CTA Button */}
              <a
                href="#cta"
                className={`btn-hover block w-full text-center px-6 py-3 rounded-xl font-semibold mb-8 ${
                  plan.highlighted
                    ? "text-gray-900 bg-white hover:bg-gray-100"
                    : "text-white"
                }`}
                style={
                  !plan.highlighted
                    ? {
                        background:
                          "linear-gradient(135deg, #0ea5e9 0%, #d946ef 100%)",
                      }
                    : {}
                }
              >
                {plan.cta}
              </a>

              {/* Divider */}
              <div
                className={`border-t mb-6 ${
                  plan.highlighted ? "border-white/20" : "border-gray-100"
                }`}
              />

              {/* Features */}
              <ul className="space-y-3">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3">
                    <svg
                      className={`w-5 h-5 flex-shrink-0 ${
                        plan.highlighted ? "text-blue-400" : "text-primary-500"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span
                      className={`text-sm ${
                        plan.highlighted ? "text-white/80" : "text-gray-600"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="text-center text-gray-400 text-sm mt-12">
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  );
}
