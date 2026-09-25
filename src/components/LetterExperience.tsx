import React, { useEffect, useState } from 'react';
import { ChevronDown, Heart } from 'lucide-react';

export const LetterExperience: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setScrollProgress(progress);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative text-[#2A1810] font-amiri text-lg sm:text-xl md:text-2xl leading-[2.3] sm:leading-[2.4] selection:bg-[#F2DFE4] selection:text-[#6E2034]">
      {/* Top Subtle Reading Progress Line */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-[#EADBCC]/60 z-50 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#C48B9F] via-[#A67C37] to-[#6E2034] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* =========================================================================
          CHAPTER 01 — THE OPENING
          ========================================================================= */}
      <section
        id="ch-01"
        className="relative min-h-screen flex flex-col justify-center items-center px-6 py-28 sm:py-36 bg-[#FAF7F2]"
      >
        {/* Soft background ambient warmth */}
        <div className="absolute w-[400px] h-[400px] bg-[#F2DFE4]/40 rounded-full blur-[130px] pointer-events-none -top-10" />

        <div className="relative z-10 max-w-2xl mx-auto w-full space-y-10 text-right">
          {/* Chapter indicator */}
          <div className="flex items-center gap-3 text-xs tracking-widest text-[#A67C37] font-cairo">
            <span className="px-3 py-1 rounded-full bg-[#FFFDF9] border border-[#EADBCC] font-medium shadow-xs">
              الفصل الأول
            </span>
            <span className="w-8 h-[1px] bg-[#A67C37]/40" />
            <span className="font-serif text-sm">٠١</span>
          </div>

          {/* Intimate "حبيبتي…" */}
          <div className="pt-2">
            <h2 className="font-ruqaa text-5xl sm:text-6xl md:text-7xl text-[#6E2034] tracking-wide inline-block">
              حبيبتي…
            </h2>
          </div>

          {/* Opening Paragraphs Card */}
          <div className="space-y-7 text-[#2A1810] p-8 sm:p-12 rounded-3xl bg-[#FFFDF9] border border-[#EADBCC] shadow-[0_10px_35px_rgba(74,46,43,0.04)]">
            <p className="text-xl sm:text-2xl text-[#6E2034] font-medium leading-relaxed">
              قبل ما تقري الكلام ده، عايزك تعملي حاجة واحدة بس…
            </p>

            <div className="p-6 rounded-2xl bg-[#F9EFF2]/80 border border-[#C48B9F]/30 space-y-2">
              <p className="text-2xl sm:text-3xl text-[#2A1810] font-semibold">
                خدي وقتك.
              </p>
              <p className="text-2xl sm:text-3xl text-[#2A1810] font-semibold">
                ماتقريهوش بسرعة.
              </p>
            </div>

            <p>
              اقري كل كلمة كأنها طالعة مني وأنا قاعد قدامك وبقولها لك واحدة واحدة، من غير ما أهرب من كلمة، ومن غير ما أخبي وراها أي حاجة.
            </p>

            <p>
              لأني المرة دي مش عايز أتكلم عن الزعل بس.
            </p>

            <p>
              ومش عايز أقولك &ldquo;حقك عليا&rdquo; وخلاص.
            </p>

            <p>
              ومش عايز أحاول أخليكي تنسي اللي حصل بكلمتين حلوين.
            </p>

            <p className="text-xl sm:text-2xl text-[#6E2034] font-medium pt-2">
              أنا عايز أقولك حاجة أكبر من كده بكتير.
            </p>

            <p className="text-2xl sm:text-3xl font-semibold text-[#2A1810] pt-2">
              عايزك تعرفي <strong className="text-[#6E2034] font-bold">إنتِ بالنسبالي إيه.</strong>
            </p>
          </div>

          {/* Gentle scroll indicator */}
          <div className="pt-8 flex justify-center text-[#A67C37]/50 animate-bounce duration-1000">
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>
      </section>

      {/* =========================================================================
          CHAPTER 02 — THE CONFESSION
          Warm paper-like atmosphere, soft cream card
          ========================================================================= */}
      <section
        id="ch-02"
        className="relative min-h-screen flex flex-col justify-center items-center px-6 py-28 sm:py-36 bg-gradient-to-b from-[#FAF7F2] via-[#F5EFEB] to-[#FAF7F2]"
      >
        <div className="relative z-10 max-w-2xl mx-auto w-full space-y-10 text-right">
          {/* Chapter indicator */}
          <div className="flex items-center gap-3 text-xs tracking-widest text-[#A67C37] font-cairo">
            <span className="px-3 py-1 rounded-full bg-[#FFFDF9] border border-[#EADBCC] font-medium shadow-xs">
              الفصل الثاني
            </span>
            <span className="w-8 h-[1px] bg-[#A67C37]/40" />
            <span className="font-serif text-sm">٠٢</span>
          </div>

          <div className="space-y-6 text-[#2A1810] p-8 sm:p-12 rounded-3xl bg-[#FFFDF9] border border-[#EADBCC] shadow-[0_12px_40px_rgba(74,46,43,0.05)]">
            <p>
              يمكن أنا مش دايمًا بعرف أوصف اللي جوايا.
            </p>

            <p>
              يمكن ساعات كتير ببقى حاسس بحاجات كتير ومبعرفش أقولها.
            </p>

            <p>
              وساعات أكون عايز أقولك ألف حاجة، وفي الآخر أقول كلمتين بس.
            </p>

            <div className="my-8 py-5 px-6 border-r-3 border-[#A67C37] bg-[#F9EFF2]/60 rounded-l-2xl">
              <p className="text-xl sm:text-2xl text-[#2A1810] font-medium leading-relaxed">
                بس الحقيقة إن جوايا كلام كتير جدًا ناحيتك.
              </p>
              <p className="text-lg sm:text-xl text-[#6E2034] pt-2">
                كلام يمكن لو قعدت أكتبه كل يوم مش هيخلص.
              </p>
            </div>

            <p>
              وعشان كده النهارده أنا مش هختصر.
            </p>

            <p className="text-2xl sm:text-3xl text-[#2A1810] font-semibold">
              هقولك.
            </p>

            <p className="text-xl sm:text-2xl text-[#6E2034] font-medium">
              هقولك كل اللي يمكن مبعرفش أقوله وأنا بكلمك.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CHAPTER 03 — "حياتي بدأت ترجعلي."
          ========================================================================= */}
      <section
        id="ch-03"
        className="relative min-h-screen flex flex-col justify-center items-center px-6 py-28 sm:py-36 bg-[#FAF7F2]"
      >
        <div className="relative z-10 max-w-2xl mx-auto w-full space-y-10 text-right">
          {/* Chapter indicator */}
          <div className="flex items-center gap-3 text-xs tracking-widest text-[#A67C37] font-cairo">
            <span className="px-3 py-1 rounded-full bg-[#FFFDF9] border border-[#EADBCC] font-medium shadow-xs">
              الفصل الثالث
            </span>
            <span className="w-8 h-[1px] bg-[#A67C37]/40" />
            <span className="font-serif text-sm">٠٣</span>
          </div>

          <div className="space-y-6 text-[#2A1810] p-8 sm:p-12 rounded-3xl bg-[#FFFDF9] border border-[#EADBCC] shadow-[0_12px_40px_rgba(74,46,43,0.05)]">
            <p className="text-xl sm:text-2xl text-[#2A1810] font-medium leading-relaxed">
              إنتِ عارفة يعني إيه شخص يدخل حياتك في وقت إنتِ أصلًا مش عارف حياتك رايحة فين؟
            </p>

            <p>
              يعني تكون ماشي، بتعمل اللي عليك، بتصحى وتنام وتكمل يومك…
            </p>

            <p>
              بس جواك إحساس إن في حاجة ناقصة.
            </p>

            <p>
              إنك مش عارف إيه اللي ناقص.
            </p>

            <p>
              ولا عارف إزاي تصلحه.
            </p>

            <p>
              ولا حتى عارف إنت عايز إيه بالظبط.
            </p>

            <div className="p-6 rounded-2xl bg-[#F5EFEB] border border-[#EADBCC] space-y-2">
              <p className="text-2xl text-[#6E2034] font-medium">
                أنا كنت تايه.
              </p>
              <p className="text-lg text-[#4A2E2B]">
                يمكن مكنش باين عليا.
              </p>
              <p className="text-lg text-[#4A2E2B]">
                يمكن كنت بضحك وبعيش عادي.
              </p>
              <p className="text-lg text-[#4A2E2B]">
                يمكن كنت بعمل حاجات كتير.
              </p>
              <p className="text-xl text-[#2A1810] pt-2">
                لكن جوايا كان في جزء تايه.
              </p>
              <p className="text-xl text-[#2A1810]">
                جزء مش عارف هو رايح فين.
              </p>
            </div>

            <p className="text-2xl sm:text-3xl text-[#2A1810] font-semibold pt-4">
              وبعدين جيتي إنتِ.
            </p>

            <p>
              ومش عارف إزاي حصلت.
            </p>

            <p>
              ومش عارف إمتى بالظبط كل حاجة بدأت تتغير.
            </p>

            <p>
              بس اللي أعرفه إن وجودك عمل حاجة جوايا أنا نفسي مكنتش متوقعها.
            </p>
          </div>

          {/* =========================================================================
              THE PIVOTAL CENTER HIGHLIGHT: "حياتي بدأت ترجعلي."
              Centered, large, dark typography with warm rosy card background
              ========================================================================= */}
          <div className="my-10 py-14 px-8 rounded-3xl bg-gradient-to-b from-[#FFFDF9] via-[#F9EFF2] to-[#FFFDF9] border border-[#C48B9F]/40 text-center shadow-[0_15px_45px_rgba(196,139,159,0.18)] relative overflow-hidden">
            <span className="text-xs uppercase tracking-widest text-[#A67C37] font-cairo mb-4 block font-semibold">
              نقطة التحول
            </span>
            <h3 className="font-ruqaa text-4xl sm:text-5xl md:text-6xl text-[#6E2034] leading-relaxed">
              حياتي بدأت ترجعلي.
            </h3>
          </div>

          {/* Continuing text */}
          <div className="space-y-6 text-[#2A1810] p-8 sm:p-12 rounded-3xl bg-[#FFFDF9] border border-[#EADBCC] shadow-[0_12px_40px_rgba(74,46,43,0.05)]">
            <p>
              بدأت أحس إن في حاجة مستنياني.
            </p>

            <p>
              إن في حد عايز يسمعني.
            </p>

            <p>
              حد أتكلم معاه.
            </p>

            <p>
              حد أضحك معاه.
            </p>

            <p>
              حد أشارك معاه تفاصيل يومي حتى لو كانت تفاصيل صغيرة جدًا وممكن أي حد تاني يشوفها ملهاش لازمة.
            </p>

            <div className="py-6 px-8 rounded-2xl bg-[#F9EFF2] border-r-4 border-[#6E2034] text-right mt-6">
              <p className="font-ruqaa text-2xl sm:text-3xl text-[#6E2034]">
                بس انتي مش حد انتي بنتي وقمري
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CHAPTER 04 — SMALL DETAILS
          ========================================================================= */}
      <section
        id="ch-04"
        className="relative min-h-screen flex flex-col justify-center items-center px-6 py-28 sm:py-36 bg-gradient-to-b from-[#FAF7F2] via-[#F5EFEB] to-[#FAF7F2]"
      >
        <div className="relative z-10 max-w-2xl mx-auto w-full space-y-10 text-right">
          {/* Chapter indicator */}
          <div className="flex items-center gap-3 text-xs tracking-widest text-[#A67C37] font-cairo">
            <span className="px-3 py-1 rounded-full bg-[#FFFDF9] border border-[#EADBCC] font-medium shadow-xs">
              الفصل الرابع
            </span>
            <span className="w-8 h-[1px] bg-[#A67C37]/40" />
            <span className="font-serif text-sm">٠٤</span>
          </div>

          {/* Highlight sentence */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#FFFDF9] border border-[#C48B9F]/40 shadow-[0_10px_35px_rgba(74,46,43,0.06)] text-center">
            <h3 className="font-ruqaa text-3xl sm:text-4xl md:text-5xl text-[#6E2034] leading-snug">
              إنتِ خليتي التفاصيل الصغيرة ليها معنى.
            </h3>
          </div>

          <div className="space-y-6 text-[#2A1810] p-8 sm:p-12 rounded-3xl bg-[#FFFDF9] border border-[#EADBCC] shadow-[0_12px_40px_rgba(74,46,43,0.05)]">
            <div className="grid grid-cols-1 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#EADBCC]">
                <p className="text-xl sm:text-2xl text-[#2A1810]">
                  رسالة منك ممكن تغير يوم كامل.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#EADBCC]">
                <p className="text-xl sm:text-2xl text-[#2A1810]">
                  صوتك ممكن يهديني.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#EADBCC]">
                <p className="text-xl sm:text-2xl text-[#2A1810]">
                  ضحكتك ممكن تخليني أنسى حاجة كانت مضايقاني.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#EADBCC]">
                <p className="text-xl sm:text-2xl text-[#2A1810]">
                  وكلمة منك ممكن تفضل في دماغي طول اليوم.
                </p>
              </div>
            </div>

            <p className="text-[#6E2034] font-medium pt-4">
              ويمكن إنتِ مش واخدة بالك من ده كله…
            </p>

            <p>
              بس وجودك بقى جزء من يومي.
            </p>

            <p>
              وجزء من تفكيري.
            </p>

            <p>
              وجزء من خططي.
            </p>

            <p className="pt-2">
              وجزء من الحاجات اللي بتخليني أصحى وأقول:
            </p>

            <div className="pt-3">
              <p className="font-ruqaa text-3xl sm:text-4xl text-[#6E2034] inline-block">
                الحمد لله إن هي موجودة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CHAPTER 05 — THE DAILY PROMISE
          Visually powerful central sentence: "هصالحك كل يوم."
          ========================================================================= */}
      <section
        id="ch-05"
        className="relative min-h-screen flex flex-col justify-center items-center px-6 py-28 sm:py-36 bg-[#FAF7F2]"
      >
        <div className="relative z-10 max-w-2xl mx-auto w-full space-y-10 text-right">
          {/* Chapter indicator */}
          <div className="flex items-center gap-3 text-xs tracking-widest text-[#A67C37] font-cairo">
            <span className="px-3 py-1 rounded-full bg-[#FFFDF9] border border-[#EADBCC] font-medium shadow-xs">
              الفصل الخامس
            </span>
            <span className="w-8 h-[1px] bg-[#A67C37]/40" />
            <span className="font-serif text-sm">٠٥</span>
          </div>

          <div className="space-y-6 text-[#2A1810] p-8 sm:p-12 rounded-3xl bg-[#FFFDF9] border border-[#EADBCC] shadow-[0_12px_40px_rgba(74,46,43,0.05)]">
            <p className="text-xl sm:text-2xl font-medium text-[#2A1810]">
              أنا مش عايزك تفتكري إن أهميتك عندي مرتبطة باللحظات الحلوة بس.
            </p>

            <p className="text-2xl sm:text-3xl text-[#6E2034] font-semibold">
              لأ.
            </p>

            <p className="text-xl sm:text-2xl text-[#6E2034] font-medium">
              إنتِ مهمة عندي في كل حالاتك.
            </p>

            <div className="space-y-3 pr-4 border-r-3 border-[#C48B9F]/60">
              <p>لما تكوني مبسوطة.</p>
              <p>لما تكوني تعبانة.</p>
              <p>لما تكوني ساكتة.</p>
              <p>لما تكوني زعلانة مني.</p>
              <p>لما تكوني محتاجة حد يسمعك.</p>
              <p>حتى لما تكوني مش عارفة إنتِ محتاجة إيه.</p>
            </div>

            <p className="text-xl sm:text-2xl text-[#2A1810] pt-2 font-medium">
              أنا عايز أبقى الشخص اللي تقدري ترجعي له.
            </p>

            <p>
              مش لازم أكون عندي الحل لكل حاجة.
            </p>

            <p>
              ومش لازم أعرف أصلح كل حاجة.
            </p>

            <p className="text-xl sm:text-2xl text-[#6E2034] font-medium">
              بس نفسي أبقى موجود.
            </p>

            <p>
              أسمعك.
            </p>

            <p>
              أفهمك.
            </p>

            <p>
              وأفضل جنبك.
            </p>

            <hr className="border-[#EADBCC] my-6" />

            <p>
              وعشان كده لما بتزعلي مني، الموضوع بالنسبالي مش مجرد:
            </p>

            <p className="italic text-[#6E2034] text-xl">
              &ldquo;خلاص هي زعلانة وهتهدى.&rdquo;
            </p>

            <p className="text-2xl sm:text-3xl text-[#6E2034] font-semibold">
              لأ.
            </p>

            <p>
              أنا مش بعرف أكون مرتاح وأنا عارف إنك متضايقة بسببي.
            </p>

            <p>
              يمكن عشان إنتِ  مهمة عندي بالشكل ده.
            </p>

            <p>
              يمكن عشان بقيت أعرف إن حالتك بتفرق معايا.
            </p>

            <p>
              ويمكن عشان أنا مش عايز أبقى سبب في إن الشخص اللي وجوده فرّق في حياتي يحس في يوم إنه مش فارق معايا.
            </p>

            <p className="text-xl text-[#A67C37] font-semibold pt-2">
              وعشان كده قلتلك:
            </p>
          </div>

          {/* =========================================================================
              THE MAIN PROMISE: "هصالحك كل يوم."
              ========================================================================= */}
          <div className="my-10 py-12 px-6 rounded-3xl bg-gradient-to-b from-[#FFFDF9] via-[#F9EFF2] to-[#FFFDF9] border-2 border-[#C48B9F] shadow-[0_15px_45px_rgba(196,139,159,0.2)] text-center relative overflow-hidden">
            <span className="text-xs uppercase tracking-widest text-[#A67C37] font-cairo mb-3 block font-bold">
              الوعد الصادق
            </span>
            <h3 className="font-ruqaa text-4xl sm:text-6xl md:text-7xl text-[#6E2034] tracking-wide">
              هصالحك كل يوم.
            </h3>
          </div>

          <div className="space-y-6 text-[#2A1810] p-8 sm:p-12 rounded-3xl bg-[#FFFDF9] border border-[#EADBCC] shadow-[0_12px_40px_rgba(74,46,43,0.05)]">
            <p>
              مش مجرد كلام.
            </p>

            <p>
              ومش عشان أفضل أفتح موضوع الزعل كل يوم.
            </p>

            <p>
              بالعكس.
            </p>

            <p className="text-xl sm:text-2xl text-[#6E2034] font-medium leading-relaxed">
              أنا عايز أصالحك لحد ما المصالحة نفسها تبقى حاجة من حاجاتنا الحلوة.
            </p>

            <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#EADBCC] space-y-4">
              <div>
                <p className="text-[#6E2034] text-sm font-cairo font-medium">كل يوم أقولك:</p>
                <p className="text-2xl text-[#2A1810] font-semibold">حقك عليا.</p>
              </div>

              <div>
                <p className="text-[#6E2034] text-sm font-cairo font-medium">كل يوم أقولك:</p>
                <p className="text-2xl text-[#2A1810] font-semibold">بحبك.</p>
              </div>

              <div>
                <p className="text-[#6E2034] text-sm font-cairo font-medium">كل يوم أفكرك:</p>
                <p className="text-2xl text-[#2A1810] font-semibold">إنتِ مهمة عندي.</p>
              </div>
            </div>

            <p>
              حتى لو مفيش زعل.
            </p>

            <p>
              حتى لو اليوم عادي.
            </p>

            <p>
              حتى لو مفيش أي سبب.
            </p>

            <p className="text-2xl text-[#6E2034] font-ruqaa pt-2">
              لأنك مش محتاجة سبب عشان أقولك إنك غالية.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CHAPTER 06 — HER IMPORTANCE
          ========================================================================= */}
      <section
        id="ch-06"
        className="relative min-h-screen flex flex-col justify-center items-center px-6 py-28 sm:py-36 bg-gradient-to-b from-[#FAF7F2] via-[#F5EFEB] to-[#FAF7F2]"
      >
        <div className="relative z-10 max-w-2xl mx-auto w-full space-y-10 text-right">
          {/* Chapter indicator */}
          <div className="flex items-center gap-3 text-xs tracking-widest text-[#A67C37] font-cairo">
            <span className="px-3 py-1 rounded-full bg-[#FFFDF9] border border-[#EADBCC] font-medium shadow-xs">
              الفصل السادس
            </span>
            <span className="w-8 h-[1px] bg-[#A67C37]/40" />
            <span className="font-serif text-sm">٠٦</span>
          </div>

          <div className="space-y-6 text-[#2A1810] p-8 sm:p-12 rounded-3xl bg-[#FFFDF9] border border-[#EADBCC] shadow-[0_12px_40px_rgba(74,46,43,0.05)]">
            <p className="text-xl sm:text-2xl text-[#6E2034] font-medium">
              وعايزك تعرفي حاجة مهمة جدًا.
            </p>

            <div className="p-8 rounded-2xl bg-[#F9EFF2] border border-[#C48B9F]/30">
              <p className="font-ruqaa text-2xl sm:text-3xl text-[#2A1810] leading-relaxed">
                أنا مش بحب وجودك في حياتي عشان إنتِ بتخليني مبسوط وبس.
              </p>
            </div>

            <p className="text-xl sm:text-2xl text-[#2A1810] font-medium leading-relaxed">
              أنا بحب وجودك لأنك بقيتي جزء من الحياة اللي أنا عايز أعيشها.
            </p>

            <p>
              بقيت لما أتخيل بكرة، أتخيل إن فيكي جزء منه.
            </p>

            <p className="text-[#6E2034] font-medium">
              لما يحصل معايا حاجة حلوة، أول قمر بفكر أحكيلها إنتِ.
            </p>

            <p>
              لما أكون تعبان، نفسي أتكلم معاكي.
            </p>

            <p>
              لما أشوف حاجة تضحك، أتمنى أشوف رد فعلك عليها.
            </p>

            <p>
              لما يحصل أي موقف، ساعات ألاقي نفسي بقول:
            </p>

            <p className="text-2xl text-[#6E2034] font-ruqaa pr-4 border-r-3 border-[#A67C37]">
              &ldquo;لازم أحكيها لها.&rdquo;
            </p>

            <p className="pt-2">
              وأعتقد إن دي من أجمل الحاجات اللي ممكن تحصل للإنسان…
            </p>

            <p>
              إن يكون عنده شخص أول ما تحصل له حاجة، يفكر فيه.
            </p>

            <p className="text-xl sm:text-2xl text-[#6E2034] font-medium">
              وإنتِ بقيتي الشخص ده بالنسبالي.
            </p>

            <hr className="border-[#EADBCC] my-6" />

            <p>
              يمكن إنتِ مش عارفة قد إيه وجودك طبطب على حاجات جوايا.
            </p>

            <p>
              يمكن مش واخدة بالك إن في أيام مجرد كلامي معاكي كان كفاية يخليني أحس إن اليوم لسه فيه حاجة حلوة.
            </p>

            <p>
              يمكن مش عارفة إن في حاجات كتير اتغيرت فيا من غير ما تطلبي مني أغيرها.
            </p>

            <p>
              مش لأنك حاولتي تغيريني.
            </p>

            <p className="text-xl sm:text-2xl text-[#2A1810] font-medium">
              لكن لأن وجودك خلاني عايز أبقى أحسن.
            </p>

            <p>
              خلاني أبص لقدام أكتر.
            </p>

            <p>
              خلاني أفكر في حياتي بشكل مختلف.
            </p>

            <p>
              خلاني أحس إن في حاجة تستاهل إني أتعب عشانها.
            </p>

            <p>
              وحاجة تستاهل إني أحافظ عليها.
            </p>

            <div className="py-4 text-center">
              <span className="font-ruqaa text-5xl sm:text-6xl text-[#6E2034] inline-block">
                إنتِ.
              </span>
            </div>

            <hr className="border-[#EADBCC] my-6" />

            <p className="text-xl sm:text-2xl text-[#2A1810] font-medium">
              وعايزك تعرفي إن أنا مش شايفك مجرد &ldquo;حبيبتي&rdquo;.
            </p>

            <p>
              الكلمة دي لوحدها صغيرة على كل اللي إنتِ بقيتيه بالنسبالي.
            </p>

            <div className="space-y-3 pr-4 border-r-3 border-[#C48B9F]">
              <p>إنتِ الشخص اللي بقيت أحب أحكيله.</p>
              <p>الشخص اللي بحب أسمع صوته.</p>
              <p>الشخص اللي ضحكته بتفرق معايا.</p>
              <p>الشخص اللي زعله بيوجعني.</p>
              <p>الشخص اللي فرحته بتفرحني.</p>
              <p>الشخص اللي وجوده بيخليني أحس إن الدنيا أهدى شوية.</p>
            </div>

            <p>
              والشخص اللي لما أتخيل إنه مش موجود…
            </p>

            <p className="text-xl text-[#6E2034] font-medium">
              بحس إن في جزء كبير جدًا من يومي هيختفي.
            </p>

            <hr className="border-[#EADBCC] my-6" />

            <p>
              وأنا عارف إن الحب مش كلام حلو وبس.
            </p>

            <p>
              عارف إن الحب مش أغنية.
            </p>

            <p>
              ومش موقع.
            </p>

            <p>
              ومش رسالة طويلة.
            </p>

            <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#EADBCC] space-y-2">
              <p>الحب في إن الواحد يفضل موجود.</p>
              <p>في إنه يتعلم.</p>
              <p>في إنه يسمع.</p>
              <p>في إنه يعتذر لما يغلط.</p>
              <p>في إنه يحاول يفهم الشخص اللي قدامه.</p>
              <p>في إنه مايستهونش بمشاعره.</p>
            </div>

            <p className="text-xl sm:text-2xl text-[#6E2034] font-medium">
              وأنا عايز أتعلم كل ده معاكي.
            </p>

            <p>
              مش عايز أقولك إني كامل.
            </p>

            <p>
              أنا مش كامل.
            </p>

            <p>
              وهغلط.
            </p>

            <p>
              وممكن ساعات أفهم غلط.
            </p>

            <p>
              وممكن ساعات أتصرف بطريقة تضايقك من غير ما أقصد.
            </p>

            <div className="p-6 rounded-2xl bg-[#F9EFF2] border border-[#C48B9F]/40 space-y-2 mt-4">
              <p className="text-xl text-[#2A1810] font-medium">
                لكن الحاجة اللي أقدر أوعدك بيها…
              </p>
              <p className="text-xl sm:text-2xl text-[#6E2034] font-medium">
                إني مش عايز أسيب الغلط يعدي من غير ما أحاول أصلحه.
              </p>
              <p className="text-xl sm:text-2xl text-[#6E2034] font-medium">
                ومش عايز أشوفك متضايقة وأسكت.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CHAPTER 07 — GRATITUDE
          Minimal visual pause, Large "شكرًا."
          ========================================================================= */}
      <section
        id="ch-07"
        className="relative min-h-screen flex flex-col justify-center items-center px-6 py-28 sm:py-36 bg-[#FAF7F2]"
      >
        <div className="relative z-10 max-w-2xl mx-auto w-full space-y-10 text-right">
          {/* Chapter indicator */}
          <div className="flex items-center gap-3 text-xs tracking-widest text-[#A67C37] font-cairo">
            <span className="px-3 py-1 rounded-full bg-[#FFFDF9] border border-[#EADBCC] font-medium shadow-xs">
              الفصل السابع
            </span>
            <span className="w-8 h-[1px] bg-[#A67C37]/40" />
            <span className="font-serif text-sm">٠٧</span>
          </div>

          <p className="text-xl sm:text-2xl text-[#6E2034] font-medium">
            وعايز أقولك حاجة يمكن أهم من كل الكلام اللي فات.
          </p>

          {/* Minimal visual pause & Large "شكرًا." */}
          <div className="py-14 text-center">
            <h2 className="font-ruqaa text-6xl sm:text-7xl md:text-8xl text-[#2A1810] inline-block">
              شكرًا.
            </h2>
          </div>

          {/* Reveal gratitude paragraphs */}
          <div className="space-y-6 text-[#2A1810] p-8 sm:p-12 rounded-3xl bg-[#FFFDF9] border border-[#EADBCC] shadow-[0_12px_40px_rgba(74,46,43,0.05)]">
            <div className="space-y-4 pr-3 border-r-3 border-[#A67C37]">
              <p className="text-xl sm:text-2xl text-[#6E2034] font-semibold">
                شكرًا إنك جيتي حياتي.
              </p>
              <p>شكرًا على كل مرة ضحكتي فيها بسببي.</p>
              <p>وشكرًا على كل مرة ضحكتي وأنا أصلًا كنت محتاج أضحك.</p>
              <p>شكرًا على كل مرة سمعتي كلامي.</p>
              <p>شكرًا على كل مرة استحملتي فيها طريقتي.</p>
              <p>شكرًا على كل لحظة حلوة عشناها.</p>
              <p>وشكرًا حتى على اللحظات الصعبة.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#EADBCC] space-y-2 mt-4">
              <p>لأنها علمتني حاجات عنك.</p>
              <p>وعلمتني حاجات عن نفسي.</p>
              <p>وعلمتني إن العلاقة مش معناها إننا عمرنا ما نزعل.</p>
              <p className="text-xl sm:text-2xl text-[#6E2034] font-medium pt-2">
                لكن معناها إننا لما نزعل…
              </p>
              <p className="font-ruqaa text-3xl sm:text-4xl text-[#2A1810] pt-1">
                نرجع لبعض.
              </p>
            </div>

            <hr className="border-[#EADBCC] my-6" />

            <div className="space-y-6">
              <p>
                أنا مش عايز أقولك:
              </p>

              <p className="text-2xl text-[#6E2034] font-ruqaa">
                &ldquo;متزعليش.&rdquo;
              </p>

              <p>
                لأن من حقك تزعلي.
              </p>

              <p>
                ومن حقك تحسي.
              </p>

              <p>
                ومن حقك تقولي إن حاجة ضايقتك.
              </p>

              <div className="p-6 rounded-2xl bg-[#F9EFF2] border border-[#C48B9F]/40 space-y-3">
                <p className="text-xl sm:text-2xl text-[#2A1810] font-semibold">
                  أنا بس عايزك لما تزعلي تعرفي إنك مش لوحدك.
                </p>
                <p>وإن في شخص مستعد يسمعك.</p>
                <p>وإن زعلك مش حمل عليه.</p>
                <p>ومش إزعاج.</p>
                <p>ومش حاجة تخليه يبعد.</p>
              </div>

              <p className="text-xl sm:text-2xl text-[#2A1810] font-medium">
                بالعكس.
              </p>

              <p>
                أنا نفسي لما تكوني متضايقة تعرفي إنك تقدري تيجي تقوليلي.
              </p>

              <p>
                حتى لو مش عارفة تعبري.
              </p>

              <p>
                حتى لو هتقولي &ldquo;مش عارفة&rdquo;.
              </p>

              <p>
                حتى لو هتسكتي.
              </p>

              <p className="font-ruqaa text-3xl sm:text-4xl text-[#6E2034] pt-2">
                أنا هفضل موجود.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CHAPTER 08 — HER VALUE
          "قيمتك عندي." with subtle golden line underneath
          ========================================================================= */}
      <section
        id="ch-08"
        className="relative min-h-screen flex flex-col justify-center items-center px-6 py-28 sm:py-36 bg-gradient-to-b from-[#FAF7F2] via-[#F5EFEB] to-[#FAF7F2]"
      >
        <div className="relative z-10 max-w-2xl mx-auto w-full space-y-10 text-right">
          {/* Chapter indicator */}
          <div className="flex items-center gap-3 text-xs tracking-widest text-[#A67C37] font-cairo">
            <span className="px-3 py-1 rounded-full bg-[#FFFDF9] border border-[#EADBCC] font-medium shadow-xs">
              الفصل الثامن
            </span>
            <span className="w-8 h-[1px] bg-[#A67C37]/40" />
            <span className="font-serif text-sm">٠٨</span>
          </div>

          <p className="text-xl sm:text-2xl text-[#2A1810]">
            وعايزك تبقي عارفة إن في حاجة واحدة مش هتغيرها أي خناقة ولا أي زعل.
          </p>

          {/* Central highlight with subtle golden line underneath */}
          <div className="py-6 text-center">
            <h3 className="font-ruqaa text-4xl sm:text-5xl md:text-6xl text-[#6E2034] pb-4">
              قيمتك عندي.
            </h3>
            <div className="w-32 sm:w-48 h-[2px] mx-auto bg-gradient-to-r from-transparent via-[#A67C37] to-transparent" />
          </div>

          <div className="space-y-6 text-[#2A1810] p-8 sm:p-12 rounded-3xl bg-[#FFFDF9] border border-[#EADBCC] shadow-[0_12px_40px_rgba(74,46,43,0.05)]">
            <p>ممكن أزعل.</p>
            <p>ممكن نتخانق.</p>
            <p>ممكن يحصل سوء تفاهم.</p>

            <p className="text-xl sm:text-2xl text-[#6E2034] font-medium pt-2">
              لكن ده كله عمره ما يخلي وجودك في حياتي حاجة عادية.
            </p>

            <div className="p-6 rounded-2xl bg-[#F9EFF2] border border-[#C48B9F]/30 space-y-2">
              <p className="text-2xl text-[#2A1810] font-semibold">إنتِ مش عادية بالنسبالي.</p>
              <p className="text-2xl text-[#2A1810] font-semibold">وجودك مش تفصيلة.</p>
              <p className="text-3xl text-[#6E2034] font-ruqaa">وجودك فرق.</p>
            </div>

            <p>فرق في أيامي.</p>
            <p>في تفكيري.</p>
            <p>في مشاعري.</p>
            <p>وفي نظرتي لبكرة.</p>

            <hr className="border-[#EADBCC] my-6" />

            <p className="text-xl sm:text-2xl text-[#2A1810] font-medium">
              فاكرة لما قلتلك إني هصالحك كل يوم؟
            </p>

            <p className="text-xl text-[#6E2034] font-medium">
              أنا كنت أقصدها فعلًا.
            </p>

            <p>
              حتى لو النهارده مفيش زعل.
            </p>

            <p className="text-2xl text-[#6E2034] font-ruqaa">
              هصالحك.
            </p>

            <p>
              هقولك حقك عليا.
            </p>

            <p>
              هقولك بحبك.
            </p>

            <p>
              هقولك إنك مهمة.
            </p>

            <hr className="border-[#EADBCC] my-6" />

            <div className="p-8 rounded-3xl bg-[#FAF7F2] border border-[#EADBCC] space-y-5">
              <p className="text-xl sm:text-2xl text-[#2A1810] font-medium">
                ولو في يوم من الأيام حسيتِ إنك مش مهمة…
              </p>
              <p className="text-xl text-[#6E2034] font-semibold">
                تعالي افتكري الكلام ده.
              </p>

              <p className="text-xl sm:text-2xl text-[#2A1810] font-medium pt-2">
                ولو في يوم حسيتِ إني بعيد…
              </p>
              <p className="text-xl text-[#6E2034] font-semibold">
                تعالي قوليلي.
              </p>

              <p className="text-xl sm:text-2xl text-[#2A1810] font-medium pt-2">
                ولو في يوم حسيتِ إني مش مهتم…
              </p>
              <p className="text-2xl text-[#6E2034] font-bold">
                ماتسكتيش.
              </p>
              <p className="text-2xl text-[#6E2034] font-ruqaa">
                قوليلي.
              </p>
            </div>

            <p>
              لأني عايز أفضل أعرفك.
            </p>

            <p>
              مش عايز أفترض إني فاهمك لمجرد إننا قريبين.
            </p>

            <p className="text-xl sm:text-2xl text-[#2A1810] font-medium">
              أنا عايز كل يوم أعرف عنك حاجة جديدة.
            </p>

            <div className="space-y-2 pr-4 border-r-3 border-[#A67C37]">
              <p>عن أحلامك.</p>
              <p>عن خوفك.</p>
              <p>عن الحاجات اللي بتفرحك.</p>
              <p>عن الحاجات اللي بتضايقك.</p>
            </div>

            <p className="text-2xl sm:text-3xl text-[#2A1810] pt-3">
              عن كل التفاصيل اللي بتخليكي <strong className="text-[#6E2034] font-bold">إنتِ</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CHAPTER 09 — "أنا مبسوط إنك هنا."
          Transition toward peace, warmth, and happiness
          ========================================================================= */}
      <section
        id="ch-09"
        className="relative min-h-screen flex flex-col justify-center items-center px-6 py-28 sm:py-36 bg-[#FAF7F2]"
      >
        <div className="relative z-10 max-w-2xl mx-auto w-full space-y-10 text-right">
          {/* Chapter indicator */}
          <div className="flex items-center gap-3 text-xs tracking-widest text-[#A67C37] font-cairo">
            <span className="px-3 py-1 rounded-full bg-[#FFFDF9] border border-[#EADBCC] font-medium shadow-xs">
              الفصل التاسع
            </span>
            <span className="w-8 h-[1px] bg-[#A67C37]/40" />
            <span className="font-serif text-sm">٠٩</span>
          </div>

          <div className="space-y-6 text-[#2A1810] p-8 sm:p-12 rounded-3xl bg-[#FFFDF9] border border-[#EADBCC] shadow-[0_12px_40px_rgba(74,46,43,0.05)]">
            <p>
              وأنا مش عارف المستقبل هيبقى عامل إزاي.
            </p>

            <p>
              ولا عارف الأيام هتاخدنا فين.
            </p>

            <p className="text-xl sm:text-2xl text-[#6E2034] font-medium">
              لكن عارف حاجة واحدة دلوقتي:
            </p>

            {/* Warm tone banner */}
            <div className="p-8 sm:p-10 rounded-2xl bg-[#F9EFF2] border border-[#C48B9F]/40 text-center my-4 shadow-[0_4px_25px_rgba(196,139,159,0.15)]">
              <h3 className="font-ruqaa text-4xl sm:text-5xl text-[#6E2034]">
                أنا مبسوط إنك هنا.
              </h3>
            </div>

            <p>
              مبسوط إن طريقنا اتقاطع.
            </p>

            <p className="text-xl sm:text-2xl text-[#2A1810] font-medium">
              مبسوط إن في قمر زيك دخل حياتي.
            </p>

            <p>
              ومبسوط إن بعد فترة كنت فيها تايه…
            </p>

            <p className="text-xl sm:text-2xl text-[#6E2034] font-medium">
              لقيت حاجة تخليني أحس إني رجعت أمسك الطريق تاني.
            </p>

            <p className="text-lg text-[#6E2034] pt-4 font-medium">
              يمكن إنتِ مش عارفة قد إيه الجملة دي كبيرة بالنسبالي:
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CHAPTER 10 — "حياتي رجعتلي."
          THE BIGGEST VISUAL MOMENT
          ========================================================================= */}
      <section
        id="ch-10"
        className="relative min-h-screen flex flex-col justify-center items-center px-6 py-32 sm:py-44 bg-gradient-to-b from-[#FAF7F2] via-[#FBF2E8] to-[#FAF7F2] overflow-hidden"
      >
        {/* Soft sunrise warm golden glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,228,210,0.6)_0%,rgba(249,239,242,0.4)_45%,transparent_75%)] pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto w-full space-y-14 text-center">
          {/* Chapter indicator */}
          <div className="flex items-center justify-center gap-3 text-xs tracking-widest text-[#A67C37] font-cairo">
            <span className="px-3 py-1 rounded-full bg-[#FFFDF9] border border-[#EADBCC] font-medium shadow-xs">
              الفصل العاشر
            </span>
            <span className="w-8 h-[1px] bg-[#A67C37]/50" />
            <span className="font-serif text-sm">١٠</span>
          </div>

          {/* THE ICONIC ALONE PHRASE */}
          <div className="py-12 sm:py-20">
            <h1 className="font-ruqaa text-5xl sm:text-7xl md:text-8xl text-[#6E2034] leading-tight tracking-wide">
              حياتي رجعتلي.
            </h1>
          </div>

          {/* Continuing original paragraph */}
          <div className="space-y-6 text-[#2A1810] text-right max-w-xl mx-auto bg-[#FFFDF9] p-8 sm:p-12 rounded-3xl border border-[#EADBCC] shadow-[0_15px_45px_rgba(74,46,43,0.06)]">
            <p>
              مش لأنك جيتي تنقذيني.
            </p>

            <p>
              ولا لأن حياتي قبلِك كانت ملهاش معنى.
            </p>

            <p className="text-xl sm:text-2xl text-[#6E2034] font-medium leading-relaxed">
              لكن لأن وجودك خلاني أشوف فيها حاجات جميلة مكنتش شايفها.
            </p>

            <p>
              خلاني أتحمس لحاجات.
            </p>

            <p>
              خلاني أستنى حاجات.
            </p>

            <p>
              خلاني أحب تفاصيل صغيرة.
            </p>

            <p className="text-xl sm:text-2xl text-[#2A1810] font-medium">
              خلاني أحس إن في شخص نفسي أشاركه الطريق.
            </p>

            <p className="text-2xl text-[#6E2034] font-ruqaa pt-2">
              وده بالنسبة لي شيء كبير جدًا.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CHAPTER 11 — WHY SHE IS IMPORTANT
          Reveals reasons one by one
          ========================================================================= */}
      <section
        id="ch-11"
        className="relative min-h-screen flex flex-col justify-center items-center px-6 py-28 sm:py-36 bg-[#FAF7F2]"
      >
        <div className="relative z-10 max-w-2xl mx-auto w-full space-y-10 text-right">
          {/* Chapter indicator */}
          <div className="flex items-center gap-3 text-xs tracking-widest text-[#A67C37] font-cairo">
            <span className="px-3 py-1 rounded-full bg-[#FFFDF9] border border-[#EADBCC] font-medium shadow-xs">
              الفصل الحادي عشر
            </span>
            <span className="w-8 h-[1px] bg-[#A67C37]/40" />
            <span className="font-serif text-sm">١١</span>
          </div>

          <div className="space-y-6">
            <p className="text-xl text-[#6E2034] font-medium">
              فلو سألتيني:
            </p>

            <div className="p-6 rounded-2xl bg-[#FFFDF9] border-r-4 border-[#6E2034] border border-[#EADBCC] shadow-xs">
              <h3 className="font-ruqaa text-3xl sm:text-4xl text-[#2A1810]">
                &ldquo;أنا مهمة عندك ليه؟&rdquo;
              </h3>
            </div>

            <p className="text-xl text-[#4A2E2B]">
              مش هعرف أديكي سبب واحد.
            </p>

            <p className="text-2xl text-[#6E2034] font-semibold">
              هقولك:
            </p>
          </div>

          {/* Reveal reasons one by one */}
          <div className="space-y-3 pt-2">
            {[
              "عشان ضحكتك بتفرق.",
              "عشان صوتك بيفرق.",
              "عشان وجودك بيفرق.",
              "عشان زعلك بيفرق.",
              "عشان فرحتك بتفرحني.",
              "عشان لما يحصل معايا حاجة نفسي أحكيهالك.",
              "عشان بقيتي جزء من يومي.",
              "عشان بقيتي جزء من تفكيري.",
              "عشان بقيتي واحدة من أجمل الحاجات اللي حصلتلي.",
            ].map((reason, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#FFFDF9] border border-[#EADBCC] hover:border-[#C48B9F] transition-colors duration-300 shadow-[0_4px_18px_rgba(74,46,43,0.03)]"
              >
                <p className="font-ruqaa text-2xl sm:text-3xl text-[#2A1810] leading-relaxed">
                  {reason}
                </p>
              </div>
            ))}

            {/* Final reason */}
            <div className="p-6 rounded-2xl bg-[#F9EFF2] border border-[#C48B9F]/40 text-center mt-6 shadow-xs">
              <p className="text-lg text-[#6E2034] mb-1 font-medium">وعشان ببساطة…</p>
              <h4 className="font-ruqaa text-4xl sm:text-5xl text-[#6E2034]">
                أنا بحبك.
              </h4>
            </div>
          </div>

          {/* Continuing text */}
          <div className="space-y-6 text-[#2A1810] p-8 sm:p-12 rounded-3xl bg-[#FFFDF9] border border-[#EADBCC] shadow-[0_12px_40px_rgba(74,46,43,0.05)] mt-8">
            <p>
              والنهارده أنا مش عايز أخلي نهاية الكلام ده اعتذار.
            </p>

            <p className="text-2xl text-[#6E2034] font-ruqaa">
              عايز أخليها وعد.
            </p>

            <div className="space-y-3 pr-4 border-r-3 border-[#A67C37]">
              <p>وعد إني هفضل أحاول.</p>
              <p>هفضل أتعلم.</p>
              <p>هفضل أقولك اللي جوايا بدل ما أسكت.</p>
              <p className="text-xl sm:text-2xl text-[#2A1810] font-medium pt-1">
                وهفضل أحاول أخليكي تحسي إن وجودك في حياتي له قيمة.
              </p>
            </div>

            <p>مش بالكلام بس.</p>
            <p>بأفعالي.</p>
            <p>باهتمامي.</p>
            <p>بطريقتي معاكي.</p>
            <p className="text-xl text-[#6E2034] font-medium">
              وبكل حاجة صغيرة أقدر أعملها عشان أشوفك مبسوطة.
            </p>

            <hr className="border-[#EADBCC] my-6" />

            <div className="p-8 rounded-2xl bg-[#FAF7F2] border border-[#EADBCC] space-y-4">
              <p className="text-xl sm:text-2xl text-[#2A1810] font-medium">
                ولو كنتِ لسه شايلة حاجة جواكي…
              </p>
              <p className="text-2xl text-[#6E2034] font-ruqaa">
                حطيها هنا.
              </p>
              <p className="text-2xl text-[#6E2034] font-ruqaa">
                سيبيها معايا.
              </p>
              <p className="text-2xl text-[#2A1810] font-semibold">
                متشيليش حاجة لوحدك.
              </p>

              <p className="pt-2">ولو في حاجة أنا عملتها ووجعتك…</p>
              <p className="text-2xl text-[#6E2034] font-ruqaa">قوليلي.</p>

              <p className="pt-2">ولو في حاجة محتاجة تتصلح…</p>
              <p className="text-2xl text-[#6E2034] font-ruqaa">نصلحها.</p>
            </div>

            <p className="text-xl text-[#6E2034] pt-2 font-medium">
              أنا مستعجل بس على حاجة واحدة…
            </p>

            <p className="font-ruqaa text-3xl sm:text-4xl text-[#6E2034]">
              إني أشوفك مبسوطة تاني.
            </p>

            <hr className="border-[#EADBCC] my-6" />

            <p>
              وفي وسط كل الكلام ده…
            </p>

            <p>
              عايز أقولك حاجة بسيطة جدًا:
            </p>

            <div className="py-4">
              <h3 className="font-ruqaa text-4xl sm:text-5xl text-[#6E2034]">
                أنا بحبك.
              </h3>
            </div>

            <div className="space-y-3 pr-4 border-r-3 border-[#C48B9F]">
              <p>بحبك في الأيام الحلوة.</p>
              <p>وفي الأيام اللي مش ماشية كويس.</p>
              <p>بحبك وإنتِ بتضحكي.</p>
              <p>وبحبك وإنتِ بتتخانقي معايا 😂.</p>
              <p>بحب كلامك.</p>
              <p>وسكوتك.</p>
              <p>ودلعك.</p>
              <p>وعنادك.</p>
            </div>

            <p>
              وكل التفاصيل اللي يمكن إنتِ شايفاها عادية…
            </p>

            <p className="text-xl sm:text-2xl text-[#6E2034] font-medium">
              وأنا شايفها جزء منك.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CHAPTER 12 — RECONCILIATION
          Warm comforting hug atmosphere
          ========================================================================= */}
      <section
        id="ch-12"
        className="relative min-h-screen flex flex-col justify-center items-center px-6 py-28 sm:py-36 bg-gradient-to-b from-[#FAF7F2] via-[#F5EFEB] to-[#FAF7F2]"
      >
        <div className="relative z-10 max-w-2xl mx-auto w-full space-y-10 text-right">
          {/* Chapter indicator */}
          <div className="flex items-center gap-3 text-xs tracking-widest text-[#A67C37] font-cairo">
            <span className="px-3 py-1 rounded-full bg-[#FFFDF9] border border-[#EADBCC] font-medium shadow-xs">
              الفصل الثاني عشر
            </span>
            <span className="w-8 h-[1px] bg-[#A67C37]/40" />
            <span className="font-serif text-sm">١٢</span>
          </div>

          <div className="space-y-4">
            <p className="text-2xl sm:text-3xl text-[#6E2034]">
              فخلاص…
            </p>

            <div className="p-8 sm:p-10 rounded-3xl bg-[#F9EFF2] border border-[#C48B9F]/50 shadow-[0_10px_35px_rgba(196,139,159,0.12)]">
              <h3 className="font-ruqaa text-3xl sm:text-4xl md:text-5xl text-[#6E2034] leading-relaxed">
                كفاية زعل بقى يا حبيبتي. ❤️
              </h3>
            </div>
          </div>

          <div className="space-y-6 text-[#2A1810] p-8 sm:p-12 rounded-3xl bg-[#FFFDF9] border border-[#EADBCC] shadow-[0_12px_40px_rgba(74,46,43,0.05)]">
            <div className="space-y-3 text-xl sm:text-2xl text-[#2A1810] pr-4 border-r-3 border-[#C48B9F]">
              <p>تعالي نرجع نضحك.</p>
              <p>تعالي نرجع نتكلم في حاجات ملهاش لازمة.</p>
              <p>تعالي نرجع نرخم على بعض.</p>
              <p>تعالي نرجع نعيش أيامنا.</p>
            </div>

            <p className="text-xl sm:text-2xl text-[#6E2034] font-medium leading-relaxed pt-2">
              لأن أنا مش عايز أجمل قمر في حياتي تبقى مرتبطة عندي بيوم زعل.
            </p>

            <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#EADBCC] space-y-2">
              <p>أنا عايز أفتكر ضحكتك.</p>
              <p>أفتكر كلامنا.</p>
              <p>أفتكر اللحظات اللي كنا فيها مبسوطين.</p>
            </div>

            <p className="text-xl sm:text-2xl text-[#2A1810] font-medium pt-2">
              وأفتكر إن مهما حصل…
            </p>

            <p className="font-ruqaa text-3xl sm:text-4xl text-[#6E2034]">
              عرفنا نرجع لبعض.
            </p>

            <hr className="border-[#EADBCC] my-6" />

            <div className="space-y-6">
              <p className="text-xl text-[#6E2034] font-medium">
                وأخيرًا…
              </p>

              <p>لو الدنيا كلها لخبطتني في يوم،</p>
              <p>ولو حسيت إني تايه،</p>
              <p>ولو مش عارف أنا رايح فين…</p>

              <p className="text-xl sm:text-2xl text-[#2A1810]">
                يمكن مش محتاج منك غير حاجة واحدة:
              </p>

              <div className="py-6 text-center">
                <h3 className="font-ruqaa text-4xl sm:text-6xl text-[#6E2034]">
                  خليكي موجودة.
                </h3>
              </div>

              <div className="p-6 rounded-2xl bg-[#F9EFF2] border border-[#C48B9F]/30 space-y-3">
                <p className="text-xl sm:text-2xl text-[#2A1810] font-medium">لأن وجودك لوحده بيفرق.</p>
                <p className="text-xl sm:text-2xl text-[#2A1810] font-medium">وجودك بيطمن.</p>
                <p className="text-xl sm:text-2xl text-[#6E2034] font-medium">وجودك بيفكرني إن لسه في حاجات جميلة مستاهلة أعيش عشانها.</p>
              </div>

              <p className="text-xl sm:text-2xl text-[#6E2034] pt-2 font-medium">
                ويمكن عشان كده…
              </p>

              <p className="text-2xl text-[#2A1810] font-semibold">
                أنا ممتن جدًا إنك في حياتي.
              </p>

              <p>
                ومهما كتبت ومهما قلت…
              </p>

              <p className="text-xl sm:text-2xl text-[#6E2034]">
                هفضل حاسس إن الكلام أقل من اللي جوايا.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FINAL EMOTIONAL SCENE
          ========================================================================= */}
      <section
        id="ch-final-emotional"
        className="relative min-h-screen flex flex-col justify-center items-center px-6 py-32 sm:py-48 bg-gradient-to-b from-[#FAF7F2] via-[#F8ECEF] to-[#FAF7F2]"
      >
        <div className="relative z-10 max-w-xl mx-auto w-full text-center space-y-16">
          <div className="space-y-10">
            <h3 className="font-ruqaa text-4xl sm:text-6xl text-[#2A1810]">
              إنتِ مهمة.
            </h3>

            <h3 className="font-ruqaa text-4xl sm:text-6xl text-[#2A1810]">
              إنتِ غالية.
            </h3>

            <h3 className="font-ruqaa text-4xl sm:text-6xl text-[#6E2034]">
              وجودك فرق.
            </h3>

            <p className="font-ruqaa text-3xl sm:text-5xl text-[#2A1810] leading-relaxed pt-4">
              وحياتي فعلًا بقت أحلى من يوم ما بقيتي فيها.
            </p>
          </div>

          <div className="py-8 space-y-8">
            <p className="font-ruqaa text-3xl sm:text-4xl text-[#6E2034]">
              وأنا…
            </p>

            <div className="p-8 sm:p-12 rounded-3xl bg-[#FFFDF9] border border-[#C48B9F]/40 shadow-[0_15px_45px_rgba(196,139,159,0.18)]">
              <p className="font-ruqaa text-3xl sm:text-5xl text-[#6E2034] leading-relaxed">
                لسه كل يوم باكتشف سبب جديد يخليني أحبك أكتر.
              </p>
            </div>

            <div className="pt-4 text-3xl text-rose-500 animate-pulse">
              ❤️
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FINAL SCREEN
          ========================================================================= */}
      <section
        id="ch-final"
        className="relative min-h-screen flex flex-col justify-center items-center px-6 py-28 sm:py-36 bg-[#FFFDF9] text-center border-t border-[#EADBCC]"
      >
        {/* Soft breathing heart light */}
        <div className="absolute w-[340px] sm:w-[500px] h-[340px] sm:h-[500px] rounded-full bg-[#F2DFE4]/50 blur-[130px] pointer-events-none" />

        <div className="relative z-10 max-w-xl mx-auto w-full space-y-10">
          <div className="flex items-center justify-center gap-3 text-xs tracking-widest text-[#A67C37] font-cairo">
            <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#A67C37]/40" />
            <span className="font-medium">الوعد المستمر</span>
            <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#A67C37]/40" />
          </div>

          <h3 className="font-ruqaa text-3xl sm:text-4xl text-[#6E2034]">
            اليوم الأول من وعدي ليكي…
          </h3>

          <div className="p-8 sm:p-12 rounded-3xl bg-[#FAF7F2] border border-[#EADBCC] space-y-6 shadow-[0_15px_45px_rgba(74,46,43,0.06)]">
            <p className="font-ruqaa text-2xl sm:text-3xl text-[#2A1810] leading-relaxed">
              مش هسيبك زعلانة لوحدك.
            </p>

            <p className="text-lg sm:text-xl text-[#6E2034] font-medium">
              ومش هصالحك بس لما تزعلي…
            </p>

            <p className="font-ruqaa text-2xl sm:text-3xl text-[#6E2034] leading-relaxed">
              هصالحك كل يوم، عشان كل يوم أقولك إنك تستاهلي الحب ده كله.
            </p>
          </div>

          <div className="pt-8">
            <h1 className="font-ruqaa text-5xl sm:text-6xl md:text-7xl text-[#6E2034] tracking-wide">
              بحبك يا حبيبتي ❤️
            </h1>
          </div>

          {/* Gentle permanent footer */}
          <div className="pt-16 pb-8 text-xs text-[#4A2E2B]/50 font-cairo tracking-wide">
            من يوم ما جيتي لحياتي · هصالحك كل يوم
          </div>
        </div>
      </section>
    </div>
  );
};
