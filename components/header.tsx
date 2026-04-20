import { Phone } from "lucide-react";

export function Header() {
  return (
    <header className="w-full py-5 px-6 md:px-8 flex items-center justify-center bg-white border-b-2 border-gray-100">
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between px-0">
        <div className="text-2xl md:text-3xl font-black tracking-tight text-black">
          ТРЕЗВЫЙ.KG
        </div>
        <a
          href="tel:+996507777961"
          className="flex items-center gap-2 text-lg md:text-xl font-bold text-black"
        >
          <Phone className="w-6 h-6 md:w-8 md:h-8" strokeWidth={3} />
          <span className="hidden sm:inline">0507 77-79-61</span>
        </a>
      </div>
    </header>
  );
}

