import { soberDriverFaq } from "@/lib/faq";

export function FaqSection() {
  return (
    <section className="w-full px-4 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-black text-[#238d43]">Вопросы и ответы</p>
        <h2 className="display-font text-balance mt-3 text-4xl font-black leading-none text-[#171a17] md:text-6xl">Что важно знать перед заказом</h2>
        <div className="mt-10 divide-y divide-[#171a17]/10 border-y border-[#171a17]/10">
          {soberDriverFaq.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="cursor-pointer list-none pr-8 text-xl font-black text-[#171a17] marker:content-none">
                {item.question}
              </summary>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#171a17]/58">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
