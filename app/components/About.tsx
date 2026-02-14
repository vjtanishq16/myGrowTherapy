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
                Live a fulfilling life.
              </h2>
              <div className="space-y-5 text-dark">
                <p className="font-sans text-[16px] md:text-[17px] leading-[1.7]">
                  Life can be challenging—especially when you&apos;re trying to
                  balance your personal and professional life.
                </p>
                <p className="font-sans text-[16px] md:text-[17px] leading-[1.7]">
                  It&apos;s easy to feel like you&apos;re alone in facing these
                  challenges, but I want you to know that I&apos;m here to help.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Full-bleed Image */}
          <div className="order-1 md:order-2 min-h-[400px] md:min-h-full">
            <img
              src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/87fa2310-36df-4a24-a9e9-1b74df73f150/tanya-trukyr-ornZV1YJNNo-unsplash.jpg?format=1500w"
              alt="Woman with flowers"
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
              Get in touch&nbsp;&nbsp;→
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}