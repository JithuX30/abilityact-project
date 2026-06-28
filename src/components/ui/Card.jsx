export default function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`
        bg-white border border-[#E8E4F0] rounded-2xl
        shadow-[0_2px_8px_rgba(31,27,46,0.06)]
        transition-shadow duration-200
        hover:shadow-[0_6px_20px_rgba(31,27,46,0.12)]
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}
