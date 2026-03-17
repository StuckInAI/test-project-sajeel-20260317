const footerLinks = {
  Product: ["Features", "Pricing", "Changelog", "Roadmap", "Documentation"],
  Company: ["About", "Blog", "Careers", "Press", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"],
  Support: ["Help Center", "Community", "Status", "API Reference"],
};

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                style={{
                  background: "linear-gradient(135deg, #0ea5e9 0%, #d946ef 100%)",
                }}
              >
                N
              </div>
              <span className="font-bold text-xl">NexaFlow</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              The all-in-one platform to build, ship, and scale your digital products.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { label: "Twitter", icon: "𝕏" },
                { label: "GitHub", icon: "⌥" },
                { label: "LinkedIn", icon: "in" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-sm transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} NexaFlow, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span>Made with</span>
            <span className="text-red-500">❤️</span>
            <span>by the NexaFlow team</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
