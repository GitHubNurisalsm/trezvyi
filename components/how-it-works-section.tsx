const steps = [
  {
    title: "Позвоните или напишите",
    text: "Сообщите, где вы находитесь и куда нужно ехать.",
  },
  {
    title: "Согласуйте стоимость",
    text: "Уточним маршрут и цену до начала поездки.",
  },
  {
    title: "Водитель приедет",
    text: "Он сядет за руль вашей машины и отвезёт вас.",
  },
] as const;

export function HowItWorksSection() {
  return (
    <section className="border-y border-slate-100 bg-slate-50 px-4 py-14 md:px-6 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-extrabold text-green-700">Как это работает</p>
          <h2 className="text-balance mt-2 text-3xl font-black tracking-[-0.035em] text-slate-950 md:text-4xl">Три простых шага</h2>
        </div>

        <ol className="mt-8 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-2xl bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-green-100 text-sm font-black text-green-700">{index + 1}</span>
              <h3 className="mt-5 text-lg font-extrabold text-slate-950">{step.title}</h3>
              <p className="mt-2 leading-6 text-slate-600">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
