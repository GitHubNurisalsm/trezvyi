import { services } from "@/lib/services";

export function TariffsSection() {
  return (
    <section className="w-full px-6 py-16 md:py-24 bg-white flex flex-col items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-black text-black text-center mb-10">
          ЦЕНЫ
        </h2>
        <ul className="flex flex-col gap-6">
          {services.map((item) => (
            <li
              key={item.title}
              className="flex flex-col md:flex-row justify-between md:items-center py-5 md:py-6 border-b-4 border-black gap-4"
            >
              <span className="text-xl md:text-2xl font-extrabold text-black">
                {item.shortTitle}
              </span>
              <span className="text-xl md:text-2xl font-black text-black">
                {item.price}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
