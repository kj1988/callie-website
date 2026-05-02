import Image from "next/image";
import { Camera, MessageCircle, BarChart3, Target, Globe, Zap, Star, Check, Apple, Play } from "lucide-react";

const CALLIE_IMG = (name: string) =>
  `https://mycallie.app/assets/images/${name}?v=d4e194df`;

const features = [
  {
    icon: <Camera className="w-6 h-6" />,
    title: "Snap & Track",
    desc: "Take a quick photo or scan a barcode. Callie recognizes your meal, calculates calories, and logs it in seconds.",
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Type or Talk",
    desc: "Log meals by typing, voice, or switching languages mid-sentence — Callie always understands you.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Menu Scanner",
    desc: "Dining out doesn't mean guessing anymore. Scan any restaurant menu and stay on track effortlessly.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Smart Analytics",
    desc: "Visualize your progress with weight tracking, habit streaks, and macro breakdowns that actually make sense.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Built-In AI Coach",
    desc: "Get personalized nutrition guidance through natural conversation — like a coach who never judges you.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Personalized Goals",
    desc: "Custom macros, BMI tracking, fitness level assessment, and allergy management — all tailored to you.",
  },
];

const steps = [
  {
    num: "01",
    title: "Download Callie",
    desc: "Get the app on iOS or Android and set up your profile in under 2 minutes.",
    img: "image01.png",
  },
  {
    num: "02",
    title: "Snap, Type or Talk",
    desc: "Log meals with a photo, your voice, or a quick text — whatever's fastest for you.",
    img: "image03.png",
  },
  {
    num: "03",
    title: "Watch Progress Happen",
    desc: "Track calories, macros, and habits with beautiful insights that keep you motivated.",
    img: "image04.png",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    handle: "@sarah_eats",
    text: "Finally a calorie tracker that doesn't make me feel like I'm doing homework. Callie is so intuitive!",
    stars: 5,
  },
  {
    name: "James R.",
    handle: "@jameslifts",
    text: "The photo recognition is insanely accurate. I snapped my lunch and it got every ingredient right.",
    stars: 5,
  },
  {
    name: "Priya K.",
    handle: "@priya_wellness",
    text: "I love that I can talk to it in Hindi and it still tracks perfectly. Multi-language support is a game changer.",
    stars: 5,
  },
  {
    name: "Tom W.",
    handle: "@tomfitlife",
    text: "Lost 18 lbs in 3 months just by being consistent with Callie. The AI coach keeps me accountable.",
    stars: 5,
  },
  {
    name: "Aisha B.",
    handle: "@aisha_health",
    text: "The menu scanner saved me SO many times at restaurants. No more calorie guessing when eating out.",
    stars: 5,
  },
  {
    name: "Mike D.",
    handle: "@mikebulks",
    text: "Clean UI, fast logging, zero fluff. Exactly what I needed after trying five other apps.",
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
  "AI nutrition coach (24/7)",
  "Multi-language voice logging",
  "Menu & barcode scanner",
  "Weight & habit tracker",
  "Personalized macro goals",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* NAV */}
      <nav className="gradient-hero sticky top-0 z-50 px-6 py-4 flex items-center justify-between border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">C</span>
          </div>
          <span className="text-white font-bold text-xl tracking-tight">callie</span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#pricing"
            className="text-white/70 hover:text-white text-sm transition-colors hidden sm:block"
          >
            Pricing
          </a>
          <a
            href="https://apps.apple.com"
            className="bg-green-500 hover:bg-green-400 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
          >
            Download Free
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="gradient-hero px-6 pt-20 pb-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.08)_0%,transparent_70%)]" />
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-white/80 text-sm">Loved by 100K+ users &middot; 4.8 rating</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6">
            Track calories in{" "}
            <span className="text-green-400">30 seconds.</span>
            <br />
            Type, talk or snap.
          </h1>

          <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            The world&apos;s easiest calorie tracker that cares about your sanity, not just numbers.
            Two minutes from now, you&apos;ll wish you started sooner.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="https://apps.apple.com"
              className="flex items-center justify-center gap-3 bg-white text-gray-900 font-semibold px-6 py-3.5 rounded-2xl hover:bg-gray-100 transition-colors"
            >
              <Apple className="w-5 h-5" />
              <div className="text-left">
                <div className="text-xs text-gray-500 leading-none">Download on the</div>
                <div className="text-base font-bold leading-tight">App Store</div>
              </div>
            </a>
            <a
              href="https://play.google.com"
              className="flex items-center justify-center gap-3 bg-white/10 border border-white/20 text-white font-semibold px-6 py-3.5 rounded-2xl hover:bg-white/20 transition-colors"
            >
              <Play className="w-5 h-5 fill-white" />
              <div className="text-left">
                <div className="text-xs text-white/60 leading-none">Get it on</div>
                <div className="text-base font-bold leading-tight">Google Play</div>
              </div>
            </a>
          </div>

          {/* App Screenshots */}
          <div className="flex items-end justify-center gap-4 sm:gap-6">
            <div className="float-animation" style={{ animationDelay: "0.5s" }}>
              <Image
                src={CALLIE_IMG("image06.png")}
                alt="Callie app screenshot"
                width={180}
                height={360}
                className="app-screenshot opacity-80"
                unoptimized
              />
            </div>
            <div className="float-animation">
              <Image
                src={CALLIE_IMG("image04.png")}
                alt="Callie app dashboard"
                width={220}
                height={440}
                className="app-screenshot"
                unoptimized
              />
            </div>
            <div className="float-animation" style={{ animationDelay: "1s" }}>
              <Image
                src={CALLIE_IMG("image05.png")}
                alt="Callie app tracking"
                width={180}
                height={360}
                className="app-screenshot opacity-80"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF BAR */}
      <div className="bg-gray-950 py-5 px-6">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-8 text-center">
          {[
            { val: "100K+", label: "Active Users" },
            { val: "4.8★", label: "App Store Rating" },
            { val: "30s", label: "Average Log Time" },
            { val: "40+", label: "Languages Supported" },
          ].map((stat) => (
            <div key={stat.val}>
              <div className="text-green-400 font-bold text-2xl">{stat.val}</div>
              <div className="text-white/50 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Everything you need, nothing you don&apos;t
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Callie is built for real life — messy kitchens, restaurant menus, and days when counting every calorie feels impossible.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="card-hover bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-4">
                  {f.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 px-6 bg-gray-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Start tracking in 3 steps
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              No complicated setup. No learning curve. Just results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="text-center">
                <div className="relative inline-block mb-6">
                  <Image
                    src={CALLIE_IMG(step.img)}
                    alt={step.title}
                    width={200}
                    height={400}
                    className="rounded-3xl mx-auto shadow-2xl shadow-black/50"
                    unoptimized
                  />
                  <div className="absolute -top-3 -left-3 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{step.num}</span>
                  </div>
                </div>
                <h3 className="text-white font-bold text-xl mb-2">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCREENSHOT SHOWCASE */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Beautiful by design
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              A clutter-free, modern interface that makes healthy habits feel effortless.
            </p>
          </div>
          <div className="flex gap-4 sm:gap-6 justify-center flex-wrap">
            {["image07.png", "image08.png", "image09.png", "image11.png"].map((img, i) => (
              <Image
                key={img}
                src={CALLIE_IMG(img)}
                alt={`Callie app feature ${i + 1}`}
                width={160}
                height={320}
                className="rounded-3xl shadow-xl shadow-gray-200 border border-gray-100"
                unoptimized
              />
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 bg-gray-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Real people, real results
            </h2>
            <p className="text-white/50 text-lg">
              Over 100,000 people trust Callie to hit their goals every day.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 card-hover"
              >
                <div className="flex mb-3">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-white/80 text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-white/40 text-xs">{t.handle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Simple, honest pricing
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              No hidden fees. Cancel anytime. Start tracking immediately.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-7 border-2 relative ${
                  plan.highlight
                    ? "border-green-500 bg-green-50 shadow-xl shadow-green-100"
                    : "border-gray-100 bg-white"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                    MOST POPULAR
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
                      <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://apps.apple.com"
                  className={`block text-center py-3 rounded-xl font-semibold text-sm transition-colors ${
                    plan.highlight
                      ? "bg-green-500 text-white hover:bg-green-600"
                      : "bg-gray-900 text-white hover:bg-gray-700"
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-xs">
            Auto-renews unless cancelled 24 hours before renewal. Manage subscription in your App Store account.
          </p>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="gradient-cta py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Two minutes from now, you&apos;ll wish you started sooner.
          </h2>
          <p className="text-white/70 text-lg mb-10">
            Hit download. Your goals are closer than you think.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://apps.apple.com"
              className="flex items-center justify-center gap-3 bg-white text-gray-900 font-semibold px-7 py-4 rounded-2xl hover:bg-gray-100 transition-colors"
            >
              <Apple className="w-5 h-5" />
              <div className="text-left">
                <div className="text-xs text-gray-500 leading-none">Download on the</div>
                <div className="text-base font-bold leading-tight">App Store</div>
              </div>
            </a>
            <a
              href="https://play.google.com"
              className="flex items-center justify-center gap-3 bg-white/15 border border-white/30 text-white font-semibold px-7 py-4 rounded-2xl hover:bg-white/25 transition-colors"
            >
              <Play className="w-5 h-5 fill-white" />
              <div className="text-left">
                <div className="text-xs text-white/60 leading-none">Get it on</div>
                <div className="text-base font-bold leading-tight">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">C</span>
              </div>
              <span className="text-white font-bold text-lg">callie</span>
            </div>
            <div className="flex items-center gap-6 text-white/50 text-sm">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms</a>
              <a href="/contact" className="hover:text-white transition-colors">Contact</a>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://instagram.com" className="text-white/50 hover:text-white transition-colors text-sm">Instagram</a>
              <a href="https://tiktok.com" className="text-white/50 hover:text-white transition-colors text-sm">TikTok</a>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/30 text-xs">
            © {new Date().getFullYear()} Callie. Not medical advice. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
