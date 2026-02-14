'use client';

import { useState } from 'react';

export default function Credentials() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const credentials = [
    {
      title: 'Education',
      content:
        'Doctor of Psychology (PsyD) in Clinical Psychology. Advanced training in trauma-focused therapies and evidence-based treatment modalities.',
    },
    {
      title: 'Licensure',
      content:
        'Licensed Clinical Psychologist in the State of California. Authorized to provide both in-person and telehealth therapy services statewide.',
    },
    {
      title: 'Specializations',
      content:
        'Cognitive Behavioral Therapy (CBT), Eye Movement Desensitization and Reprocessing (EMDR), Mindfulness-Based Stress Reduction, and Body-Oriented therapeutic techniques.',
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-light py-20 md:py-28">
      <div className="max-w-[700px] mx-auto px-[4vw]">
        <h3 className="font-serif italic text-[28px] md:text-[34px] lg:text-[40px] text-dark font-normal leading-[1.3] text-center mb-12">
          My Professional Background
        </h3>

        <div className="space-y-0">
          {credentials.map((item, index) => (
            <div key={index} className="border-t border-border last:border-b">
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between py-4 text-left cursor-pointer"
              >
                <span className="font-serif text-[17px] md:text-[19px] text-dark font-normal pr-3">
                  {item.title}
                </span>
                {/* Plus icon on RIGHT - 14px matching original */}
                <span className="w-[14px] h-[14px] flex items-center justify-center shrink-0">
                  <span className="relative w-[14px] h-[14px]">
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[10px] h-[1px] bg-dark" />
                    <span
                      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-[10px] bg-dark transition-transform duration-300 ${
                        openIndex === index ? 'scale-y-0' : 'scale-y-100'
                      }`}
                    />
                  </span>
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-[300px] pb-6' : 'max-h-0'
                }`}
              >
                <p className="font-sans text-[14px] md:text-[15px] text-muted leading-[1.7]">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
