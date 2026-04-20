const prices = [
  { service: "Город", price: "от 800 с" },
  { service: "Доставка бензина", price: "от 500 с" },
  { service: "Подкачка / Прикурить", price: "400-500 с" },
  { service: "Буксировка", price: "от 1500 с" },
];

export function TariffsSection() {
  return (
    <section className="w-full px-6 py-16 md:py-24 bg-white flex flex-col items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-black text-black text-center mb-10">
          ЦЕНЫ
        </h2>
        <ul className="flex flex-col gap-6">
          {prices.map((item) => (
            <li
              key={item.service}
              className="flex flex-col md:flex-row justify-between md:items-center py-5 md:py-6 border-b-4 border-black gap-4"
            >
              <span className="text-xl md:text-2xl font-extrabold text-black">
                {item.service}
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
