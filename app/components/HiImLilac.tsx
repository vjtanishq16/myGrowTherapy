export default function HiImLilac() {
  return (
    <section className="bg-light py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-[4vw]">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 md:order-1">
            <h2 className="font-serif italic text-[28px] md:text-[32px] lg:text-[36px] text-dark font-normal leading-[1.3] mb-6">
              Hi, I&apos;m Lilac.
            </h2>

            <div className="space-y-4 mb-8">
              <p className="font-sans text-[14px] md:text-[15px] text-dark leading-[1.7]">
                I&apos;m committed to providing a safe and supportive
                environment where we can explore your thoughts, feelings, and
                behaviors. With empathy and guidance, we&apos;ll work together
                to navigate the challenges life throws your way.
              </p>
            </div>

            <a href="#contact" className="btn-outline">
              Let&apos;s chat&nbsp;&nbsp;→
            </a>
          </div>

          {/* Right Images */}
          <div className="order-1 md:order-2 relative">
            {/* Arched Image */}
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
                  src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9a77a6f2-1c50-4582-a5c1-5ec0dc2e94e8/daiga-ellaby-Ct6LBZHaOSc-unsplash.jpg?format=1000w"
                  alt="Lilac flowers"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Circle Image - bottom right, overlapping */}
            <div className="absolute -bottom-4 right-0 md:-right-6 w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-full overflow-hidden border-4 border-light shadow-md">
              <img
                src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9f889e1b-ba2b-4a6d-92e9-767dd3db67ae/lilac+template+white+lilac.jpeg?format=1000w"
                alt="Lilac"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
