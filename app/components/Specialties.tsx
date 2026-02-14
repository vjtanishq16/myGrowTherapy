export default function Specialties() {
  const specialties = [
    {
      title: 'Self-Esteem',
      description:
        "Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.",
      image:
        'https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/166607b6-21a7-4e30-8c74-9c911c9f33fb/milles-studio-GU-Q4-SQFTg-unsplash.jpg?format=750w',
    },
    {
      title: 'Relationships',
      description:
        "Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections.",
      image:
        'https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/f53aed66-5bd9-43e0-b00b-3a3537fed68d/ori-song-LPbKfdQJS2E-unsplash.jpg?format=750w',
    },
    {
      title: 'Burnout',
      description:
        "Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.",
      image:
        'https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/515651b9-4001-47ae-8ca1-2a6ff8f2bef0/ivana-cajina--wn1PECo5-U-unsplash.jpg?format=750w',
    },
  ];

  return (
    <section id="services" className="bg-white py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-[4vw]">
        {/* Section Title */}
        <div className="text-center mb-12">
          <p className="font-sans text-[16px] md:text-[17px] text-dark">
            My Specialties
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