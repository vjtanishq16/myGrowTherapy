export default function About() {
  return (
    <section id="about" className="bg-light py-0">
      <div className="max-w-[1500px] mx-auto px-0">
        {/* Two-column content */}
        <div className="grid md:grid-cols-2 min-h-[600px]">
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center px-[6vw] md:px-[4vw] py-16 md:py-24 order-2 md:order-1">
            <div className="max-w-[520px]">
              <h2 className="font-serif italic text-[36px] md:text-[44px] lg:text-[52px] leading-[1.15] text-dark font-normal mb-6">
                Reclaim your peace of mind.
              </h2>
              <div className="space-y-5 text-dark">
                <p className="font-sans text-[16px] md:text-[17px] leading-[1.7]">
                  Many of the people I work with are high-achieving, thoughtful,
                  and self-aware—but internally feel exhausted, stuck in
                  overthinking, or emotionally on edge.
                </p>
                <p className="font-sans text-[16px] md:text-[17px] leading-[1.7]">
                  I take a warm, collaborative, and grounded approach to therapy.
                  Sessions are structured enough to feel supportive, while still
                  leaving space for reflection and depth.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Full-bleed Image */}
          <div className="order-1 md:order-2 min-h-[400px] md:min-h-full">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1500&q=80"
              alt="Calm therapy office interior with natural light"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Full-width button bar below the grid */}
        <div className="grid md:grid-cols-2">
          <div className="border-t border-border">
            <a
              href="#contact"
              className="block w-full text-center py-5 font-sans text-[14px] tracking-[1.5px] uppercase text-dark hover:bg-dark hover:text-white transition-all duration-300"
            >
              Learn more&nbsp;&nbsp;→
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}