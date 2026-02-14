export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-cream pt-[60px]"
    >
      <div className="max-w-[1500px] mx-auto px-[4vw] w-full py-12 md:py-0">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-0 items-center">
          {/* Left: Arched Image */}
          <div className="order-1 flex justify-center">
            <div className="relative w-full max-w-[380px] md:max-w-[420px]">
              {/* SVG clip path for arched window shape */}
              <svg width="0" height="0" className="absolute">
                <defs>
                    {/* The path creates an arch that starts at the bottom left, curves up to a peak in the middle, and then back down to the bottom right. */}
                  <clipPath id="arch-clip" clipPathUnits="objectBoundingBox">
                    <path d="M0.495,0 A0.505,0.336,0,0,0,0,0.329 V1 H1 V0.329 A0.505,0.336,0,0,0,0.495,0" />
                  </clipPath>
                </defs>
              </svg>
              <div
                className="w-full aspect-[2/3]"
                style={{ clipPath: 'url(#arch-clip)' }}
              >
                <img
                  src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/08197a74-c045-4a19-a7c9-0f85c1032bc4/daiga-ellaby-M2P08N9zi2k-unsplash.jpg?format=1500w"
                  alt="Purple lilac flowers"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="order-2 text-center space-y-6">
            <h1 className="font-serif italic text-[42px] md:text-[56px] lg:text-[68px] leading-[1.1] text-dark font-normal">
              Live your life <br />
              in full bloom
            </h1>

            <p className="font-sans text-[16px] md:text-[18px] text-muted leading-relaxed">
              Therapy for Adults in Minneapolis, MN.
            </p>

            <div className="pt-2">
              <a href="#contact" className="btn-outline text-dark">
                Connect with me&nbsp;&nbsp;→
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}