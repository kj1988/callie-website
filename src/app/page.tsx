import Image from "next/image";
import { SiteNavbar } from "@/components/SiteNavbar";
import { ReviewsCarouselMobile } from "@/components/ReviewsCarouselMobile";
import {
  Camera,
  MessageCircle,
  Globe,
  BarChart3,
  Target,
  Zap,
  Star,
  Check,
} from "lucide-react";

const APP_STORE =
  "https://apps.apple.com/us/app/callie-ai-calorie-tracker/id6748760925";
const PLAY_STORE =
  "https://play.google.com/store/apps/details?id=com.tracker.callie";

const callieImage = (filename: string) => `/callie/${filename}`;

const AppStoreBadge = () => (
  // eslint-disable-next-line @next/next/no-img-element -- Apple SVG badge
  <img
    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
    alt="Download on the App Store"
    className="h-12 w-auto sm:h-[52px]"
  />
);

const GooglePlayBadge = () => (
  // eslint-disable-next-line @next/next/no-img-element -- Google PNG badge
  <img
    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
    alt="Get it on Google Play"
    className="h-[4.5rem] w-auto sm:h-[4.75rem] -my-2"
  />
);

const features = [
  {
    icon: <Camera className="w-6 h-6" />,
    title: "Snap & Track",
    desc: "Take a quick photo or scan a barcode. Callie recognizes your meal, calculates calories, and logs it in seconds.",
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Type, Talk or Snap",
    desc: "Type, talk, or switch between languages mid-sentence — Callie will still understand you.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Menu Scanner",
    desc: "Eat out, stay on track. Dining out does not have to mean guessing calories anymore.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Weight Tracker & Fit Flow",
    desc: "Visualize your progress and habit consistency with analytics tools built for real life.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Built-In Nutrition Coach",
    desc: "AI-driven personalized guidance through natural conversation — looking out for you every step.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Personalized Goals",
    desc: "BMI tracking, custom goals, fitness level assessment, and allergy management — all tailored to you.",
  },
];

const steps = [
  {
    title: "Download & personalize",
    desc: "Pick your goal — cut fat, build muscle, keto, fasting, or steady health — and Callie tunes portions, pacing, and prompts around it.",
    img: "image07.png",
  },
  {
    title: "Log without the friction",
    desc: "Photo, barcode, voice, or quick text — use whichever is fastest in the moment so tracking survives busy weeks.",
    img: "image09.png",
  },
  {
    title: "See momentum, not noise",
    desc: "Charts and coaching highlights show what's working, why a day felt off, and what to try next — celebrating wins along the way.",
    img: "image11.png",
  },
];

const testimonials = [
  {
    name: "K. Jaffer",
    handle: "Callie member",
    text: "The AI coaching before meals is a game-changer. I've avoided so many diet disasters.",
    stars: 5,
  },
  {
    name: "M. Shadab",
    handle: "Callie member",
    text: "I used to obsess over every calorie and felt guilty about food constantly. Callie helped me reach goals with a calmer relationship with eating.",
    stars: 5,
  },
  {
    name: "Priya K.",
    handle: "@priya_wellness",
    text: "Hindi and English in the same sentence — Callie still nails portions. Finally a tracker that fits how my family actually cooks.",
    stars: 5,
  },
];

const plans = [
  {
    name: "Weekly",
    price: "$1.99",
    period: "/week",
    desc: "Try it out and see results",
    highlight: false,
  },
  {
    name: "Monthly",
    price: "$2.99",
    period: "/month",
    desc: "Most popular for steady progress",
    highlight: true,
  },
  {
    name: "Annual",
    price: "$19.99",
    period: "/year",
    desc: "Best value — save over 40%",
    highlight: false,
  },
];

const planFeatures = [
  "Unlimited photo food scanning",
  "AI nutrition coach",
  "Multi-language voice logging",
  "Menu & barcode scanner",
  "Weight & habit tracker",
  "Personalized macro goals",
];

const heroScreens = [
  { src: "image08.png", alt: "Callie meal logging screen", width: 190, height: 390, dim: true },
  { src: "image04.png", alt: "Callie dashboard with daily summary", width: 230, height: 470, dim: false },
  { src: "image05.png", alt: "Callie insights and trends", width: 190, height: 390, dim: true },
] as const;

const showcaseScreens = [
  { src: "image04.png", alt: "Daily nutrition overview in Callie" },
  { src: "image07.png", alt: "Food tracking detail in Callie" },
  { src: "image09.png", alt: "Macro breakdown in Callie" },
  { src: "image11.png", alt: "Progress view in Callie" },
] as const;

function heroPhoneMotionClass(index: number) {
  if (index === 0) return "hero-phone-bounce hero-phone-bounce--lag-lg";
  if (index === 2) return "hero-phone-bounce hero-phone-bounce--lag-sm";
  return "hero-phone-bounce";
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <div className="gradient-hero relative overflow-hidden">
        <SiteNavbar />
        <section className="relative px-5 pb-28 pt-10 text-center sm:px-8 sm:pb-32 sm:pt-14">
          <div className="hero-glow hero-glow-a" aria-hidden />
          <div className="hero-glow hero-glow-b" aria-hidden />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_72%_52%_at_50%_6%,rgba(34,197,94,0.05)_0%,transparent_62%)]" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/[0.28]" />

          <div className="relative mx-auto max-w-3xl">
            <div
              className="animate-fade-up mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.09] bg-white/[0.04] px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-white/45 backdrop-blur-sm sm:text-xs sm:tracking-[0.22em]"
              style={{ animationDelay: "0.04s" }}
            >
              <span className="h-1 w-1 rounded-full bg-emerald-400/90 shadow-[0_0_10px_rgba(52,211,153,0.65)]" aria-hidden />
              Inlab Products
            </div>

            <h1
              className="animate-fade-up text-balance text-[2rem] font-bold leading-[1.14] tracking-[-0.03em] text-white sm:text-5xl sm:leading-[1.1] md:text-[3.15rem]"
              style={{ animationDelay: "0.1s" }}
            >
              Track calories in <span className="text-green-400">30 seconds.</span>
            </h1>

            <p
              className="animate-fade-up mt-5 text-xl font-bold tracking-tight text-white/[0.92] sm:text-2xl md:text-[1.65rem]"
              style={{ animationDelay: "0.16s" }}
            >
              Type, talk or snap.
            </p>

            <div
              className="animate-fade-up mx-auto mt-8 h-px w-[72px] bg-gradient-to-r from-transparent via-emerald-400/35 to-transparent sm:mt-9 sm:w-[88px]"
              style={{ animationDelay: "0.2s" }}
              aria-hidden
            />

            <p
              className="animate-fade-up mx-auto mt-8 max-w-xl text-base leading-relaxed text-white/48 sm:text-lg sm:leading-relaxed"
              style={{ animationDelay: "0.22s" }}
            >
              World&apos;s easiest calorie tracker that cares about your sanity, not just numbers.
            </p>

            <p
              className="animate-fade-up mx-auto mt-6 max-w-lg text-[0.9375rem] font-medium leading-relaxed text-white/[0.78] sm:text-lg"
              style={{ animationDelay: "0.28s" }}
            >
              Two minutes from now, you&apos;ll wish you started sooner. Hit download!
            </p>

            <div
              id="download-badges"
              className="animate-fade-up mb-[4.5rem] mt-12 flex scroll-mt-28 flex-col items-center justify-center gap-4 sm:mb-20 sm:flex-row sm:gap-5"
              style={{ animationDelay: "0.34s" }}
            >
              <a href={APP_STORE} target="_blank" rel="noopener noreferrer" className="badge-link inline-flex">
                <AppStoreBadge />
              </a>
              <a href={PLAY_STORE} target="_blank" rel="noopener noreferrer" className="badge-link inline-flex">
                <GooglePlayBadge />
              </a>
            </div>

            <div className="mx-auto flex max-w-3xl items-end justify-center gap-3 sm:gap-8">
              {heroScreens.map((shot, i) => (
                <div
                  key={shot.src}
                  className={`${heroPhoneMotionClass(i)} shrink-0 ${shot.dim ? "opacity-75 sm:opacity-85 scale-[0.94] sm:scale-100" : "z-10 scale-100"}`}
                >
                  <Image
                    src={callieImage(shot.src)}
                    alt={shot.alt}
                    width={shot.width}
                    height={shot.height}
                    className={`block h-auto w-auto max-w-none ${shot.dim ? "hidden sm:block" : ""}`}
                    priority={i === 1}
                  />
                </div>
              ))}
            </div>

            <p
              className="animate-fade-up mx-auto mt-10 max-w-md text-[11px] leading-relaxed text-white/28 sm:text-xs"
              style={{ animationDelay: "0.42s" }}
            >
              Live app imagery · iOS 18.2+ where noted · Availability varies by region.
            </p>
          </div>
        </section>
      </div>

      <section id="features" className="scroll-mt-[4.75rem] bg-gradient-to-b from-white to-gray-50/80 px-5 py-24 sm:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Smart calorie tracking that speaks your language
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Callie is built for real life — messy kitchens, restaurant menus, and days when counting every calorie feels impossible.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 stagger-children">
            {features.map((f) => (
              <div
                key={f.title}
                className="card-hover bg-white rounded-2xl p-6 border border-gray-100 shadow-sm shadow-gray-200/40"
              >
                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-4 ring-1 ring-green-100">
                  {f.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-24 px-5 sm:px-8 bg-gray-950 relative overflow-hidden scroll-mt-[4.75rem]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(34,197,94,0.08)_0%,transparent_50%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Three moves. Daily rhythm unlocked.
            </h2>
            <p className="text-white/45 text-lg max-w-xl mx-auto leading-relaxed">
              From install to first insight — most members are logging in under five minutes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 stagger-children">
            {steps.map((step, idx) => (
              <div key={step.title} className="text-center group">
                <div className="relative inline-block mb-6">
                  <div className="absolute -inset-3 rounded-[2rem] bg-green-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Image
                    src={callieImage(step.img)}
                    alt={step.title}
                    width={210}
                    height={420}
                    className="phone-frame relative rounded-[1.85rem] mx-auto"
                  />
                  <span className="absolute -top-2 -left-2 w-9 h-9 rounded-full bg-green-500 text-white text-sm font-bold flex items-center justify-center shadow-lg border-2 border-gray-950">
                    {idx + 1}
                  </span>
                </div>
                <h3 className="text-white font-bold text-xl mb-2">{step.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="screenshots" className="py-24 px-5 sm:px-8 bg-white overflow-hidden scroll-mt-[4.75rem]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Interface that stays out of your way
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Dense data when you need it, calm visuals when you don't — so checking in feels lightweight enough to do every day.
            </p>
          </div>
          <div className="flex gap-5 sm:gap-7 justify-center items-stretch flex-wrap stagger-children">
            {showcaseScreens.map((shot, i) => (
              <div key={shot.src} className="float-animation" style={{ animationDelay: `${i * 0.15}s` }}>
                <Image
                  src={callieImage(shot.src)}
                  alt={shot.alt}
                  width={168}
                  height={336}
                  className="phone-frame-light rounded-[1.65rem]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-24 bg-gray-950 scroll-mt-[4.75rem] overflow-hidden">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 mb-12 sm:mb-16 text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Voices from people who switched
          </h2>
          <p className="text-white/45 text-lg max-w-xl mx-auto">
            Pulled from reviews — edited lightly for clarity, not hype.
          </p>
        </div>

        {/* Desktop / large tablets: smooth infinite marquee */}
        <div className="hidden lg:block relative w-full select-none">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 sm:w-32 bg-gradient-to-r from-gray-950 via-gray-950/90 to-transparent"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 sm:w-32 bg-gradient-to-l from-gray-950 via-gray-950/90 to-transparent"
            aria-hidden
          />
          <div className="reviews-marquee-pause overflow-hidden py-1">
            <div className="reviews-marquee-track">
              <div className="flex shrink-0 gap-6 pr-6">
                {testimonials.map((t, idx) => (
                  <article
                    key={`marquee-a-${idx}`}
                    className="bg-white/[0.05] border border-white/10 rounded-2xl p-6 backdrop-blur-md w-[min(100vw,340px)] shrink-0 shadow-lg shadow-black/20"
                  >
                    <div className="flex mb-3">
                      {[...Array(t.stars)].map((_, si) => (
                        <Star key={si} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-white/82 text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                    <div>
                      <div className="text-white font-semibold text-sm">{t.name}</div>
                      <div className="text-white/35 text-xs">{t.handle}</div>
                    </div>
                  </article>
                ))}
              </div>
              <div className="flex shrink-0 gap-6 pr-6" aria-hidden>
                {testimonials.map((t, idx) => (
                  <article
                    key={`marquee-b-${idx}`}
                    className="bg-white/[0.05] border border-white/10 rounded-2xl p-6 backdrop-blur-md w-[min(100vw,340px)] shrink-0 shadow-lg shadow-black/20"
                  >
                    <div className="flex mb-3">
                      {[...Array(t.stars)].map((_, si) => (
                        <Star key={si} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-white/82 text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                    <div>
                      <div className="text-white font-semibold text-sm">{t.name}</div>
                      <div className="text-white/35 text-xs">{t.handle}</div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
          <p className="text-center text-white/25 text-xs mt-4">Hover to pause · Auto-scroll</p>
        </div>

        {/* Small / medium: snap carousel + dot pagination */}
        <div className="lg:hidden">
          <ReviewsCarouselMobile testimonials={testimonials} />
        </div>
      </section>

      <section id="pricing" className="py-24 px-5 sm:px-8 bg-gradient-to-b from-gray-50 to-white scroll-mt-[4.75rem]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Simple, honest pricing
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              No hidden fees. Cancel anytime. Start tracking immediately.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 stagger-children">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-7 border-2 relative transition-transform hover:-translate-y-1 duration-300 ${
                  plan.highlight
                    ? "border-green-500 bg-green-50/90 shadow-xl shadow-green-100/80 ring-1 ring-green-200/50"
                    : "border-gray-100 bg-white shadow-sm"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-green-600 text-white text-[11px] font-bold uppercase tracking-wide px-4 py-1 rounded-full shadow-md">
                    Most popular
                  </div>
                )}
                <div className="mb-4">
                  <div className="font-bold text-gray-900 text-lg">{plan.name}</div>
                  <div className="text-gray-500 text-sm">{plan.desc}</div>
                </div>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                  <span className="text-gray-400 text-sm">{plan.period}</span>
                </div>
                <ul className="space-y-2.5 mb-6">
                  {planFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#download-badges"
                  className={`block text-center py-3 rounded-xl font-semibold text-sm transition-colors ${
                    plan.highlight
                      ? "bg-green-600 text-white hover:bg-green-700 shadow-md shadow-green-900/10"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  Download on iOS or Android
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-xs leading-relaxed max-w-lg mx-auto">
            Auto-renews unless cancelled before renewal. Manage subscription in your App Store account.
          </p>
        </div>
      </section>

      <section className="gradient-cta py-20 px-5 sm:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,transparent_65%)] pointer-events-none" />
        <div className="max-w-2xl mx-auto relative animate-fade-up">
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Two minutes from now, you&apos;ll wish you started sooner.
          </h2>
          <p className="text-white/85 text-lg mb-10 leading-relaxed font-normal">
            Hit download. Your goals are closer than you think.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            <a href={APP_STORE} target="_blank" rel="noopener noreferrer" className="badge-link inline-flex">
              <AppStoreBadge />
            </a>
            <a href={PLAY_STORE} target="_blank" rel="noopener noreferrer" className="badge-link inline-flex">
              <GooglePlayBadge />
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-950 py-14 px-5 sm:px-8 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-10">
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo.jpeg"
                alt="Callie"
                width={32}
                height={32}
                className="h-8 w-8 shrink-0 rounded-lg object-cover"
              />
              <div>
                <div className="text-white font-bold text-lg leading-tight">callie</div>
                <div className="text-white/35 text-xs">Inlab Products</div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-white/45 text-sm">
              <a href="https://www.mycallie.app/" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                Website
              </a>
              <a href="mailto:calorieappnow@gmail.com" className="hover:text-white transition-colors">
                Support
              </a>
              <a href="mailto:inlabproducts@gmail.com" className="hover:text-white transition-colors">
                Business
              </a>
            </div>
            <div className="flex items-center gap-5 text-white/40 text-sm">
              <a href={APP_STORE} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                App Store
              </a>
              <a href={PLAY_STORE} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Google Play
              </a>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/30 text-xs leading-relaxed">
            © {new Date().getFullYear()} Callie · Inlab Products. Not medical advice — consult a professional for clinical
            nutrition decisions.
          </div>
        </div>
      </footer>
    </div>
  );
}
