const phoneNumbers = [
  {
    operator: "O!",
    number: "0507 77-79-61",
    tel: "+996507777961",
    bgColor: "bg-[#E30611]",
    textColor: "text-white",
  },
];

export function Footer() {
  return (
    <footer className="w-full px-6 py-16 md:py-24 bg-white flex flex-col items-center justify-center">
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-6 md:gap-8 items-center justify-center">
        {phoneNumbers.map((phone) => (
          <a
            key={phone.operator}
            href={`tel:${phone.tel}`}
            className={`block w-full min-h-[70px] md:min-h-[80px] py-5 md:py-6 ${phone.bgColor} rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow`}
          >
            <span className={`text-2xl md:text-3xl font-black ${phone.textColor}`}>
              {phone.number}
            </span>
          </a>
        ))}
      </div>
      <p className="mt-10 text-center text-xl font-black text-black w-full">
        24/7 КРУГЛОСУТОЧНО
      </p>
    </footer>
  );
}
