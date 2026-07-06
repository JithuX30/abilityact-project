const colourClasses = {
  purple: "bg-[#EDE6F7] text-[#6B4E9E]",
  coral:  "bg-[#FBEAE3] text-[#8B3A1C]",
  blue:   "bg-[#E0EDFA] text-[#2462A0]",
  green:  "bg-[#DFF0E8] text-[#266E49]",
};

export default function Badge({ colour = "purple", children, className = "" }) {
  return (
    <span
      className={`
        inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium
        ${colourClasses[colour] ?? colourClasses.purple}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
