const features = [
  {
    icon: "⚡",
    title: "Lightning Fast Builds",
    description:
      "Deploy in seconds with our optimized CI/CD pipeline. Zero configuration, maximum performance out of the box.",
  },
  {
    icon: "🔒",
    title: "Enterprise Security",
    description:
      "Bank-grade encryption, SOC2 compliant, with automatic security patches and vulnerability scanning built in.",
  },
  {
    icon: "📊",
    title: "Real-time Analytics",
    description:
      "Monitor performance, user behavior, and business metrics from a single, intuitive dashboard.",
  },
  {
    icon: "🌐",
    title: "Global CDN",
    description:
      "Serve your content from 200+ edge locations worldwide. Sub-50ms response times guaranteed.",
  },
  {
    icon: "🤖",
    title: "AI Assistance",
    description:
      "Let our AI co-pilot help you write, debug, and optimize code. Ship smarter, not harder.",
  },
  {
    icon: "🔗",
    title: "Seamless Integrations",
    description:
      "Connect with 500+ tools including GitHub, Slack, Stripe, and more. Your workflow, supercharged.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 text-primary-600 bg-primary-50 border border-primary-100">
            Features
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Everything you need to{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #0ea5e9 0%, #d946ef 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              succeed
            </span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            A complete toolkit designed for modern developers and teams who move fast and ship confidently.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-hover group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-primary-200"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-6"
                style={{ background: "linear-gradient(135deg, #e0f2fe 0%, #fae8ff 100%)" }}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
