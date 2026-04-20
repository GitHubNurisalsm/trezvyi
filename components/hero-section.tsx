import Link from "next/link";

export function HeroSection() {
  return (
    <section className="w-full px-6 pt-12 pb-16 md:pt-20 md:pb-24 flex flex-col items-center justify-center text-center bg-white">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-black leading-none tracking-tight">
        ТРЕЗВЫЙ
        <br />
        ВОДИТЕЛЬ
      </h1>

      <p className="mt-6 text-xl md:text-2xl font-extrabold text-black">
        БИШКЕК И ПРИГОРОД
      </p>

      <Link
        href="/zakaz-v-1-klik"
        className="mt-12 flex min-h-[80px] w-full max-w-2xl items-center justify-center rounded-2xl bg-[#22C55E] px-8 py-6 transition hover:-translate-y-1 hover:bg-[#16a34a] md:mt-16 md:min-h-[100px] md:py-8"
      >
        <span className="text-2xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">
          ЗАКАЗАТЬ В 1 КЛИК
        </span>
      </Link>
      </div>
    </section>
  );
}
