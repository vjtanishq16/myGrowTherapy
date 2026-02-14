export default function Alone() {
  const challenges = [
    'Constant worry or racing thoughts that won\u2019t quiet down',
    'Tension in your body, difficulty sleeping, or feeling on edge',
    'Lingering effects of past experiences on your relationships',
    'Professional burnout or high internal pressure',
    'A sense of being \u201cfunctional\u201d on the outside while quietly struggling',
  ];

  return (
    <section className="bg-bright py-0">
      <div className="grid md:grid-cols-2">
        {/* Left Image - Full Bleed */}
        <div className="aspect-[4/3] md:aspect-auto">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1500&q=80"
            alt="Thoughtful professional woman by window"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col">
          <div className="flex items-center flex-1 px-[6vw] py-16 md:py-20">
            <div className="max-w-[480px]">
              <h2 className="font-serif italic text-[28px] md:text-[32px] lg:text-[36px] text-dark font-normal leading-[1.3] mb-8">
                You don&apos;t have to keep pushing through{' '}
                <em className="not-italic">alone</em>.
              </h2>

              <p className="font-sans text-[14px] md:text-[15px] text-dark leading-[1.7] mb-6">
                If you&apos;re experiencing any of these, therapy can help:
              </p>

              <ul className="space-y-3 mb-8">
                {challenges.map((item, index) => (
                  <li
                    key={index}
                    className="font-sans text-[14px] md:text-[15px] text-dark leading-[1.7] flex items-start"
                  >
                    <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-dark shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="font-sans text-[14px] md:text-[15px] text-dark leading-[1.7]">
                My goal is not just symptom relief, but helping you develop
                insight, resilience, and a stronger relationship with yourself
                over time.
              </p>
            </div>
          </div>

          {/* Stretched button bar under right content */}
          <a
            href="#contact"
            className="block text-center py-4 border-t border-border font-sans text-[14px] tracking-[1.5px] uppercase text-dark hover:bg-dark hover:text-white transition-all duration-300"
          >
            Work with me&nbsp;&nbsp;→
          </a>
        </div>
      </div>
    </section>
  );
}
