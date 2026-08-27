export default function SectionHeading({ children, className = "" }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <span className="hidden h-px w-16 bg-gradient-to-r from-transparent to-crimson-bright sm:block" />
      <span className="hidden text-crimson-bright sm:block">&#10230;</span>
      <h2 className="font-display text-center text-xl tracking-[0.12em] text-gold uppercase md:text-[1.65rem]">
        {children}
      </h2>
      <span className="hidden text-crimson-bright sm:block">&#10229;</span>
      <span className="hidden h-px w-16 bg-gradient-to-l from-transparent to-crimson-bright sm:block" />
    </div>
  );
}
