const steps = [
  {
    title: "Оставьте заявку",
    text: "Позвоните или напишите в WhatsApp и укажите, где вы находитесь.",
  },
  {
    title: "Согласуйте поездку",
    text: "Уточним маршрут и стоимость до начала поездки.",
  },
  {
    title: "Водитель приедет",
    text: "Наш водитель приедет к вам и доставит вас на вашем автомобиле.",
  },
] as const;

export function HowItWorksSection() {
  return (
    <section className="w-full px-4 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black text-[#238d43]">Всё просто</p>
          <h2 className="display-font text-balance mt-3 text-4xl font-black leading-none text-[#171a17] md:text-6xl">Три понятных шага</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#171a17]/58">Не нужно заполнять формы и регистрироваться.</p>
        </div>
        <div className="mt-10 grid gap-3 md:grid-cols-3">
          {steps.map((step, index) => (
            <article key={step.title} className="relative overflow-hidden rounded-[1.75rem] bg-white p-6 shadow-[0_12px_32px_rgba(23,26,23,0.055)] md:p-7">
              <span className="display-font absolute right-4 top-1 text-8xl font-black text-[#42d36b]/13">{index + 1}</span>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#dff7e5] text-base font-black text-[#196f34]">{index + 1}</span>
              <h3 className="mt-8 text-xl font-black text-[#171a17]">{step.title}</h3>
              <p className="text-pretty mt-3 max-w-sm leading-relaxed text-[#171a17]/58">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
