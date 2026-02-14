'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What does a typical session look like?',
      answer:
        'Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. I integrate evidence-based methods such as CBT, EMDR, mindfulness-based practices, and body-oriented techniques tailored to your needs.',
    },
    {
      question: 'Do you offer telehealth sessions?',
      answer:
        'Yes. I offer both in-person therapy from my Santa Monica office and secure telehealth sessions for clients located anywhere in California.',
    },
    {
      question: 'What issues do you specialize in?',
      answer:
        'I specialize in anxiety, panic, trauma, EMDR, professional burnout, and perfectionism. I work primarily with high-achieving adults, entrepreneurs, creatives, and professionals.',
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-cream py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-[4vw]">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left - Arched Image */}
          <div className="relative">
            <svg viewBox="0 0 1 0" className="absolute">
              <defs>
                <clipPath id="arch-clip-faq" clipPathUnits="objectBoundingBox">
                  <path d="M0.495,0 A0.505,0.336,0,0,0,0,0.329 V1 H1 V0.329 A0.505,0.336,0,0,0,0.495,0" />
                </clipPath>
              </defs>
            </svg>
            <div
              className="w-full aspect-[2/3] overflow-hidden"
              style={{ clipPath: 'url(#arch-clip-faq)' }}
            >
              <img
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1000&q=80"
                alt="Sunlight through leaves, calm and peaceful"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right - FAQ Accordion */}
          <div className="flex flex-col justify-center">
            <h2 className="font-serif italic text-[32px] md:text-[38px] lg:text-[44px] text-dark font-normal leading-[1.2] mb-10">
              FAQs
            </h2>

            <div className="space-y-0">
              {faqs.map((faq, index) => (
                <div key={index} className="border-t border-border last:border-b">
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-center py-5 text-left cursor-pointer"
                  >
                    {/* Plus icon on LEFT - matching original */}
                    <span className="w-[30px] h-[30px] flex items-center justify-center shrink-0">
                      <span className="relative w-[30px] h-[30px]">
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[14px] h-[1px] bg-dark" />
                        <span
                          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-[14px] bg-dark transition-transform duration-300 ${
                            openIndex === index ? 'scale-y-0' : 'scale-y-100'
                          }`}
                        />
                      </span>
                    </span>
                    <span className="font-serif italic text-[22px] md:text-[26px] lg:text-[28px] text-dark font-normal pl-3">
                      {faq.question}
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index ? 'max-h-[300px] pb-6' : 'max-h-0'
                    }`}
                  >
                    <p className="font-sans text-[14px] md:text-[15px] text-muted leading-[1.7] pl-[42px]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}