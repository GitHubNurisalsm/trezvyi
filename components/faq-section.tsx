import { soberDriverFaq } from "@/lib/faq";

export function FaqSection() {
  return (
    <section className="w-full bg-white px-6 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-[#15803d]">Вопросы и ответы</p>
        <h2 className="mt-3 text-3xl font-black text-black md:text-5xl">Что важно знать перед заказом</h2>
        <div className="mt-10 divide-y-2 divide-black border-y-2 border-black">
          {soberDriverFaq.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="cursor-pointer list-none pr-8 text-xl font-black text-black marker:content-none">
                {item.question}
              </summary>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-black/70">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
