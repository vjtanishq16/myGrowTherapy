export default function OurOffice() {
  return (
    <section id="office" className="bg-cream py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-[4vw]">
        {/* Header */}
        <div className="max-w-[600px] mb-12 md:mb-16">
          <h2 className="font-serif italic text-[28px] md:text-[36px] lg:text-[42px] text-dark font-normal leading-[1.2] mb-5">
            Your healing space
          </h2>
          <p className="font-sans text-[14px] md:text-[15px] text-dark leading-[1.8]">
            Therapy works best when you feel safe. My Santa Monica office is
            designed to feel warm, unhurried, and entirely yours—a quiet retreat
            from the noise of daily life where real change can begin.
          </p>
        </div>

        {/* Asymmetric Gallery */}
        <div className="grid md:grid-cols-12 gap-4 md:gap-5 items-end">
          {/* Large Image */}
          <div className="md:col-span-7">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/d/1DwpoQD0VWsfGsl4J1CwtSb3Wxy5ePVJW"
                alt="Dr. Maya Reynolds' therapy office in Santa Monica — a calm, private space for healing"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Small Image */}
          <div className="md:col-span-5">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/d/1EqlCJsSNzGI93VgaQULRIwoFP2xiFioy"
                alt="Comfortable seating area inside the therapy office"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Detail Strip */}
        <div className="mt-10 md:mt-14 pt-8 border-t border-border">
          <div className="grid sm:grid-cols-3 gap-8 md:gap-12">
            <div>
              <h4 className="font-sans text-[11px] md:text-[12px] tracking-[2px] uppercase text-muted mb-2">
                Location
              </h4>
              <p className="font-serif italic text-[18px] md:text-[20px] text-dark leading-[1.4]">
                Santa Monica, CA
              </p>
            </div>

            <div>
              <h4 className="font-sans text-[11px] md:text-[12px] tracking-[2px] uppercase text-muted mb-2">
                Sessions
              </h4>
              <p className="font-serif italic text-[18px] md:text-[20px] text-dark leading-[1.4]">
                In-person &amp; telehealth
              </p>
            </div>

            <div>
              <h4 className="font-sans text-[11px] md:text-[12px] tracking-[2px] uppercase text-muted mb-2">
                Environment
              </h4>
              <p className="font-serif italic text-[18px] md:text-[20px] text-dark leading-[1.4]">
                Private, calm &amp; confidential
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
