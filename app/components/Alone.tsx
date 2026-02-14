export default function Alone() {
  const challenges = [
    'Persistent feelings of sadness or hopelessness',
    'Trouble focusing or making decisions',
    'Difficulty maintaining relationships',
    'Feeling constantly exhausted or unmotivated',
    'A pervasive sense of being overwhelmed',
  ];

  return (
    <section className="bg-bright py-0">
      <div className="grid md:grid-cols-2">
        {/* Left Image - Full Bleed */}
        <div className="aspect-[4/3] md:aspect-auto">
          <img
            src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/a77b422e-33ac-47b2-825f-293d33884041/valeriia-miller-5jR4rAMs5tk-unsplash+%281%29.jpg?format=1500w"
            alt="Flowers"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col">
          <div className="flex items-center flex-1 px-[6vw] py-16 md:py-20">
            <div className="max-w-[480px]">
              <h2 className="font-serif italic text-[28px] md:text-[32px] lg:text-[36px] text-dark font-normal leading-[1.3] mb-8">
                You don&apos;t have to do this all{' '}
                <em className="not-italic">alone</em>.
              </h2>

              <p className="font-sans text-[14px] md:text-[15px] text-dark leading-[1.7] mb-6">
                If you are facing any of these, there&apos;s hope:
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
                With empathy and guidance, we&apos;ll work together to navigate
                the challenges life throws your way.
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
