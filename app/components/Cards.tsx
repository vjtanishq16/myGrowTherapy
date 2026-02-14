interface CardProps {
  icon: string;
  title: string;
  description: string;
}

export default function Card({ icon, title, description }: CardProps) {
  return (
    <div className="group bg-white border border-[#E8E4DF] rounded-lg p-8 md:p-10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      {/* Icon */}
      <div className="text-5xl mb-6 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>

      {/* Title */}
      <h3 className="font-serif text-2xl md:text-[28px] text-[#2C2C2C] mb-4 font-medium">
        {title}
      </h3>

      {/* Description */}
      <p className="font-sans text-base md:text-[16px] text-[#6B6B6B] leading-relaxed">
        {description}
      </p>
    </div>
  );
}