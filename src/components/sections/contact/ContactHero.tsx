export function ContactHero() {
  return (
    <section className="relative w-full pt-32 pb-16 bg-slate-50 overflow-hidden">
      {/* Light Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-gradient-to-b from-[#1D4ED8]/5 to-transparent blur-[100px] pointer-events-none" />
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[50%] bg-[#00D4FF]/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="container relative z-10 mx-auto px-4 md:px-8 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm w-fit mb-6">
          <div className="w-2 h-2 rounded-full bg-[#00E676] animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-600 font-sans">
            Get In Touch
          </span>
        </div>

        <h1 className="font-outfit text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6">
          Let's Build the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1D4ED8] via-[#00D4FF] to-[#00E676]">
            Future Together
          </span>
        </h1>

        <p className="font-sans text-lg text-slate-600 max-w-2xl leading-relaxed">
          Whether you have a question about our AI academy, corporate training,
          or just want to say hello, our team is ready to answer all your
          questions.
        </p>
      </div>
    </section>
  );
}
