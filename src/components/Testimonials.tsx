const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO at ScaleUp",
    avatar: "👩‍💼",
    quote:
      "NexaFlow cut our deployment time from 45 minutes to under 2 minutes. The team productivity gains have been incredible — we shipped 3x more features last quarter.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Lead Developer at TechVenture",
    avatar: "👨‍💻",
    quote:
      "The AI assistance alone is worth the price. It caught 3 critical security vulnerabilities in our codebase that we had completely missed. Absolutely essential tool.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Founder at LaunchPad",
    avatar: "👩‍🚀",
    quote:
      "As a solo founder, NexaFlow is like having a full DevOps team on demand. I can focus purely on product while the platform handles all the infrastructure complexity.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Engineering Manager at Nexus",
    avatar: "🧑‍💼",
    quote:
      "We migrated from three separate tools to NexaFlow and our monthly infrastructure costs dropped by 40%. The consolidation alone made it a no-brainer decision.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24"
      style={{ background: "linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 text-purple-600 bg-purple-50 border border-purple-100">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Loved by{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #0ea5e9 0%, #d946ef 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              thousands
            </span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what builders say about NexaFlow.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-hover bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-600 text-lg leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
                  style={{ background: "linear-gradient(135deg, #e0f2fe 0%, #fae8ff 100%)" }}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
