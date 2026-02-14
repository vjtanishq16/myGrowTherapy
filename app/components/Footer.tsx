export default function Footer() {
  return (
    <footer id="contact">
      {/* Section 1: Dark-themed footer with contact, hours, navigation */}
      <div className="bg-cream">
        <div className="max-w-[1200px] mx-auto px-[4vw] py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-10 md:gap-16">
            {/* Column 1: Contact Info */}
            <div>
              <h3 className="font-serif text-[26px] md:text-[30px] text-dark font-bold mb-8">
                Lilac Template
              </h3>
              <div className="space-y-1 font-sans text-[14px] md:text-[15px] text-dark leading-[1.7]">
                <p>123 Example Road</p>
                <p>Minneapolis, MN</p>
                <p className="mt-4">
                  <a href="mailto:email@example.com" className="underline hover:opacity-70 transition-opacity">
                    email@example.com
                  </a>
                </p>
                <p>
                  <a href="tel:+15555555555" className="underline hover:opacity-70 transition-opacity">
                    (555) 555-5555
                  </a>
                </p>
              </div>
            </div>

            {/* Column 2: Hours */}
            <div>
              <h4 className="font-serif italic text-[20px] md:text-[24px] text-dark font-normal mb-5">
                Hours
              </h4>
              <div className="font-sans text-[14px] md:text-[15px] text-dark leading-[1.7]">
                <p>Monday – Friday</p>
                <p>10am – 6pm</p>
              </div>
            </div>

            {/* Column 3: Find */}
            <div className="md:text-right">
              <h4 className="font-serif italic text-[20px] md:text-[24px] text-dark font-normal mb-5">
                Find
              </h4>
              <nav className="space-y-2 font-sans text-[14px] md:text-[15px] text-dark leading-[1.7]">
                <a href="#home" className="block underline hover:opacity-70 transition-opacity">
                  Home
                </a>
                <a href="#contact" className="block underline hover:opacity-70 transition-opacity">
                  Contact
                </a>
                <a href="#" className="block underline hover:opacity-70 transition-opacity">
                  Blog
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Light-themed bottom bar with policies and credits */}
      <div className="bg-light">
        <div className="max-w-[1200px] mx-auto px-[4vw] py-8">
          <div className="flex flex-col items-center gap-4 text-center">
            {/* Policy Links */}
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 font-sans text-[12px] md:text-[13px] text-muted">
              <a href="#" className="underline hover:text-dark transition-colors">
                Privacy &amp; Cookies Policy
              </a>
              <a href="#" className="underline hover:text-dark transition-colors">
                Good Faith Estimate
              </a>
              <a href="#" className="underline hover:text-dark transition-colors">
                Website Terms &amp; Conditions
              </a>
              <a href="#" className="underline hover:text-dark transition-colors">
                Disclaimer
              </a>
            </div>

            {/* Template Credits */}
            <p className="font-sans text-[12px] md:text-[13px] text-muted">
              Website Template Credits:{' '}
              <a href="#" className="underline hover:text-dark transition-colors">
                Go Bloom Creative
              </a>
            </p>

            {/* Copyright */}
            <p className="font-sans text-[12px] md:text-[13px] text-muted">
              All Rights Reserved © 2024 Your Business Name Here, LLC.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}