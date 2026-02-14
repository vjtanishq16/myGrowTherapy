export default function Specialties() {
  const specialties = [
    {
      title: 'Anxiety & Panic',
      description:
        'Constant worry, racing thoughts, tension in your body, difficulty sleeping—anxiety can feel all-consuming. I help you understand both the emotional and physiological sides of what you\'re experiencing, so you can find lasting relief.',
      image:
        'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=750&q=80',
    },
    {
      title: 'Trauma & EMDR',
      description:
        'Whether from a single incident or long-standing patterns from childhood, trauma can continue to affect your relationships, confidence, and sense of safety. My approach is paced carefully, with an emphasis on safety and stabilization.',
      image:
        'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=750&q=80',
    },
    {
      title: 'Burnout & Perfectionism',
      description:
        'Many entrepreneurs, creatives, and professionals feel disconnected from themselves after years of pushing through stress. Therapy becomes a space to slow down, reconnect, and develop more sustainable ways of living and working.',
      image:
        'https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=750&q=80',
    },
  ];

  return (
    <section id="services" className="bg-white py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-[4vw]">
        {/* Section Title */}
        <div className="text-center mb-12">
          <p className="font-sans text-[16px] md:text-[17px] text-dark">
            Areas of Focus
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="bg-cream-dark/40 p-5 flex flex-col"
            >
              {/* Text Content */}
              <div className="mb-6">
                <h2 className="font-serif text-[22px] md:text-[24px] text-dark font-normal mb-3">
                  {specialty.title}
                </h2>
                <p className="font-sans text-[14px] md:text-[15px] text-dark leading-[1.7]">
                  {specialty.description}
                </p>
              </div>

              {/* Circular Image */}
              <div className="flex justify-center mt-auto">
                <div className="w-[75%] aspect-square rounded-full overflow-hidden">
                  <img
                    src={specialty.image}
                    alt={specialty.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}