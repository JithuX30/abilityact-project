const PARTNERS = [
  "Moorfields Eye Hospital",
  "NHS",
  "GP Partners",
  "Hillingdon Council",
];

export default function PartnersStrip() {
  return (
    <section className="bg-white py-12 border-t border-[#F4F2F7]" aria-labelledby="partners-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p
          id="partners-heading"
          className="text-center text-sm font-semibold text-[#8B8699] uppercase tracking-wider mb-8"
        >
          Proud to work with
        </p>

        <ul
          className="flex flex-wrap justify-center items-center gap-6"
          aria-label="Our partner organisations"
        >
          {PARTNERS.map((name) => (
            <li key={name}>
              <div className="h-14 w-44 bg-[#F4F2F7] rounded-xl flex items-center justify-center border border-[#E8E4F0] hover:border-[#6B4E9E] hover:bg-[#F7F3FC] transition-colors">
                <span className="text-sm font-medium text-[#8B8699] text-center px-3">
                  {name}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
