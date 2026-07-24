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
    <section className="w-full bg-black px-6 py-16 text-white md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-[#86efac]">Как это работает</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-black md:text-5xl">Трезвый водитель на вашем автомобиле</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <article key={step.title} className="rounded-3xl border-2 border-white/20 bg-white/5 p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#22c55e] text-lg font-black text-black">
                {index + 1}
              </span>
              <h3 className="mt-5 text-xl font-black">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-white/75">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
