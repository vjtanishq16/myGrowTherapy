export default function HiImLilac() {
  return (
    <section className="bg-light py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-[4vw]">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 md:order-1">
            <h2 className="font-serif italic text-[28px] md:text-[32px] lg:text-[36px] text-dark font-normal leading-[1.3] mb-6">
              Hi, I&apos;m Dr. Maya.
            </h2>

            <div className="space-y-4 mb-8">
              <p className="font-sans text-[14px] md:text-[15px] text-dark leading-[1.7]">
                I&apos;m a licensed clinical psychologist based in Santa Monica,
                California, offering therapy for adults who feel overwhelmed by
                anxiety, stress, or the lingering effects of past experiences. I
                integrate evidence-based methods such as CBT, EMDR,
                mindfulness-based practices, and body-oriented techniques to help
                you understand both the emotional and physiological sides of what
                you&apos;re experiencing.
              </p>
            </div>

            <a href="#contact" className="btn-outline">
              Let&apos;s connect&nbsp;&nbsp;→
            </a>
          </div>

          {/* Right Images */}
          <div className="order-1 md:order-2 relative">
            {/* Arched Image - Maya's headshot */}
            <div className="w-full max-w-[420px] mx-auto md:ml-auto md:mr-0">
              <svg viewBox="0 0 1 0" className="absolute">
                <defs>
                  <clipPath id="arch-clip-lilac" clipPathUnits="objectBoundingBox">
                    <path d="M0.495,0 A0.505,0.336,0,0,0,0,0.329 V1 H1 V0.329 A0.505,0.336,0,0,0,0.495,0" />
                  </clipPath>
                </defs>
              </svg>
              <div
                className="w-full aspect-[2/3] overflow-hidden"
                style={{ clipPath: 'url(#arch-clip-lilac)' }}
              >
                <img
                  src="https://lh3.googleusercontent.com/d/1koVGhvD8mkiRXRukqrklo0HbB48p9PIa"
                  alt="Dr. Maya Reynolds, Licensed Clinical Psychologist in Santa Monica"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Circle Image - Maya's second photo */}
            <div className="absolute -bottom-4 right-0 md:-right-6 w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-full overflow-hidden border-4 border-light shadow-md">
              <img
                src="https://lh3.googleusercontent.com/d/1DwpoQD0VWsfGsl4J1CwtSb3Wxy5ePVJW"
                alt="Dr. Maya Reynolds"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
