"use client";

import { type CSSProperties, FormEvent, useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const services = [
  {
    title: "База ИИ без сложных слов",
    text: "Разберёте, где нейросети действительно помогают малому бизнесу: контент, маркетинг, анализ и клиентские задачи.",
    tag: "День 1 · урок 1",
  },
  {
    title: "Промпты, которые дают результат",
    text: "Научитесь задавать роль, контекст, задачу и формат ответа, чтобы не получать общие и слабые тексты.",
    tag: "Практика",
  },
  {
    title: "ИИ-ассистент под ваш бизнес",
    text: "Настроите помощника с контекстом: описание бизнеса, аудитория, услуги, примеры, тексты и прайс.",
    tag: "День 2",
  },
];

const benefits = [
  ["⚡", "Экономия времени", "Ускорите рутинные задачи без найма новых специалистов."],
  ["🧭", "Понятная система", "Получите карту задач бизнеса и поймёте, что можно поручить ИИ."],
  ["🧩", "На реальных проектах", "Работа идёт не на абстрактных примерах, а на ваших задачах."],
  ["📦", "Шаблоны и чек-листы", "Промпты, каталог сервисов, домашние задания и материалы останутся у вас."],
  ["🤖", "Первый ассистент", "Соберёте ИИ-помощника для маркетинга, SMM, аналитики или клиентов."],
  ["🎯", "Готовый материал", "Унесёте описание услуги, оффер, контент-план или коммерческое предложение."],
];

const steps = [
  "Заполняем анкету и находим задачи, которые отнимают больше всего времени.",
  "Выбираем рабочие нейросети, настраиваем инструменты и создаём первые промпты.",
  "Улучшаем ответы, проверяем результат и собираем инструкции для ИИ-ассистента.",
  "Создаём готовый бизнес-материал и план внедрения в ежедневную работу.",
];

const testimonials = [
  {
    name: "Ольга, студия красоты",
    text: "Я впервые поняла, как говорить с нейросетью. За практикум собрала контент-план и шаблон ответов клиентам.",
  },
  {
    name: "Илья, локальный сервис",
    text: "Очень практично: без магии и сложных терминов. Теперь ИИ помогает готовить предложения и анализировать заявки.",
  },
  {
    name: "Марина, онлайн-школа",
    text: "Понравилось, что мы работали с моим проектом. Ассистент уже помогает писать тексты для рассылок.",
  },
];

const faqs = [
  ["Подойдёт ли мне практикум, если я новичок?", "Да. Всё объясняется простыми словами, а практика начинается с базовых действий и настройки инструментов."],
  ["Нужно ли заранее разбираться в нейросетях?", "Нет. Достаточно прийти со своей бизнес-задачей и ноутбуком. Остальное разберём пошагово."],
  ["Что я получу после двух дней?", "Карту задач, рабочие промпты, настроенного ИИ-помощника, готовый бизнес-материал и доступ к материалам в супергруппе."],
  ["Где будут материалы?", "Раздаточные материалы, промпты, шаблоны, каталог сервисов и домашние задания размещаются в общей супергруппе в мессенджере."],
];

function ParticleBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {[...Array(18)].map((_, index) => (
        <motion.span
          aria-hidden="true"
          className="absolute h-2 w-2 rounded-full bg-fuchsia/45 blur-[1px]"
          key={index}
          animate={{
            y: [0, -34, 0],
            x: [0, index % 2 ? 18 : -18, 0],
            opacity: [0.25, 0.9, 0.25],
            scale: [1, 1.7, 1],
          }}
          transition={{ duration: 5 + (index % 5), repeat: Infinity, delay: index * 0.18 }}
          style={{ left: `${7 + ((index * 13) % 88)}%`, top: `${12 + ((index * 17) % 76)}%` }}
        />
      ))}
    </div>
  );
}

function SectionTitle({ eyebrow, title, text, dark = false }: { eyebrow: string; title: string; text: string; dark?: boolean }) {
  return (
    <motion.div
      className="mx-auto mb-10 max-w-3xl text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={fadeUp}
      transition={{ duration: 0.65 }}
    >
      <p className="mb-3 text-sm font-black uppercase tracking-[0.28em] text-fuchsia">{eyebrow}</p>
      <h2 className={`text-3xl font-black tracking-tight md:text-5xl ${dark ? "text-white" : "text-graphite"}`}>{title}</h2>
      <p className={`mt-4 text-base leading-7 md:text-lg ${dark ? "text-white/70" : "text-softGraphite/80"}`}>{text}</p>
    </motion.div>
  );
}

export default function LandingPage() {
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-milk text-graphite">
      <section className="relative isolate px-5 pb-20 pt-6 md:px-8 md:pb-28">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_10%,rgba(217,30,143,0.22),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(232,227,238,0.95),transparent_30%),linear-gradient(135deg,#F7F1EA,#fff7fb_55%,#E8E3EE)]" />
        <div className="noise absolute inset-0 -z-10 opacity-60" />
        <ParticleBackground />

        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/70 bg-white/45 px-5 py-3 shadow-card backdrop-blur-xl">
          <a href="#top" className="text-sm font-black uppercase tracking-[0.18em] text-graphite">Нейропрактикум</a>
          <div className="hidden gap-6 text-sm font-semibold text-softGraphite md:flex">
            <a href="#program" className="hover:text-fuchsia">Программа</a>
            <a href="#benefits" className="hover:text-fuchsia">Польза</a>
            <a href="#faq" className="hover:text-fuchsia">FAQ</a>
          </div>
          <a href="#lead" className="rounded-full bg-graphite px-5 py-2 text-sm font-bold text-white transition hover:bg-fuchsia">Заявка</a>
        </nav>

        <div id="top" className="mx-auto grid max-w-7xl items-center gap-12 pt-16 lg:grid-cols-[1.03fr_0.97fr] lg:pt-24">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="mb-5 inline-flex rounded-full border border-fuchsia/25 bg-white/60 px-4 py-2 text-sm font-bold text-darkFuchsia shadow-sm backdrop-blur">
              2 дня по 4 часа · 11:00–15:00 · практика на ваших задачах
            </motion.p>
            <motion.h1 variants={fadeUp} transition={{ duration: 0.7 }} className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl xl:text-8xl">
              Нейросети для малого бизнеса — <span className="fuchsia-text">без хаоса и магии</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-lg leading-8 text-softGraphite md:text-xl">
              Практикум Натальи Руцкой, где вы настроите инструменты, научитесь писать сильные промпты и соберёте первого ИИ-ассистента под задачи своего бизнеса.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="#lead" className="group rounded-full bg-fuchsia px-8 py-4 text-center text-base font-black text-white shadow-glow transition hover:-translate-y-1 hover:bg-darkFuchsia">
                Оставить заявку <span className="inline-block transition group-hover:translate-x-1">→</span>
              </a>
              <a href="#program" className="rounded-full border border-graphite/15 bg-white/55 px-8 py-4 text-center font-bold text-graphite backdrop-blur transition hover:-translate-y-1 hover:border-fuchsia/40">
                Смотреть программу
              </a>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.92, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.9, delay: 0.18 }} className="relative mx-auto w-full max-w-[520px]">
            <motion.div animate={{ y: [0, -14, 0] }} transition={{ duration: 6, repeat: Infinity }} className="rounded-[2rem] border border-white/70 bg-white/55 p-4 shadow-card backdrop-blur-xl">
              <div className="relative overflow-hidden rounded-[1.55rem] bg-graphite p-7 text-white">
                <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-fuchsia blur-3xl" />
                <div className="absolute -bottom-16 left-8 h-44 w-44 rounded-full bg-blush/60 blur-3xl" />
                <div className="relative flex min-h-[480px] flex-col justify-between">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.22em] text-blush">Автор и тренер</p>
                    <h3 className="mt-3 text-4xl font-black">Наталья Руцкая</h3>
                    <p className="mt-4 max-w-sm text-white/75">Директор по маркетингу и практик по внедрению нейросетей в маркетинг, контент, анализ и автоматизацию процессов.</p>
                  </div>
                  <div className="relative mx-auto grid h-56 w-56 place-items-center rounded-full bg-milk text-graphite shadow-glow">
                    <div className="absolute inset-4 rounded-full border-[18px] border-fuchsia/90" />
                    <div className="text-center">
                      <p className="text-5xl font-black">ИИ</p>
                      <p className="mt-1 text-xs font-black uppercase tracking-[0.26em] text-darkFuchsia">ассистент</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    {["Промпты", "Шаблоны", "Разбор"].map((item) => (
                      <div key={item} className="rounded-2xl bg-white/10 p-3 text-sm font-bold backdrop-blur">{item}</div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="program" className="px-5 py-20 md:px-8">
        <SectionTitle eyebrow="Что внутри" title="Услуги и практические блоки" text="Сайт ведёт ученика от первого впечатления к понятному результату: что будет на практикуме и зачем это бизнесу." />
        <motion.div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={stagger}>
          {services.map((service) => (
            <motion.article key={service.title} variants={fadeUp} whileHover={{ y: -10, rotate: -0.6 }} className="group rounded-[2rem] border border-graphite/10 bg-white/70 p-7 shadow-card transition hover:border-fuchsia/35">
              <span className="rounded-full bg-blush px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-darkFuchsia">{service.tag}</span>
              <h3 className="mt-6 text-2xl font-black">{service.title}</h3>
              <p className="mt-4 leading-7 text-softGraphite/80">{service.text}</p>
              <div className="mt-8 h-2 rounded-full bg-lavender"><div className="h-2 w-2/3 rounded-full bg-fuchsia transition-all duration-500 group-hover:w-full" /></div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section id="benefits" className="bg-graphite px-5 py-20 text-white md:px-8">
        <SectionTitle dark eyebrow="Преимущества" title="После практикума ИИ станет рабочим инструментом" text="Не просто посмотрите демо, а соберёте понятную систему под свои процессы." />
        <motion.div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-3" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={stagger}>
          {benefits.map(([icon, title, text]) => (
            <motion.div key={title} variants={fadeUp} className="rounded-[1.7rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur transition hover:bg-white/[0.1]">
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-fuchsia text-2xl shadow-glow">{icon}</div>
              <h3 className="text-xl font-black">{title}</h3>
              <p className="mt-3 leading-7 text-white/70">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="px-5 py-20 md:px-8">
        <SectionTitle eyebrow="Процесс" title="Как проходит работа" text="Два дня выстроены как понятный маршрут: от первых настроек до готового материала и ИИ-помощника." />
        <div className="mx-auto max-w-5xl">
          {steps.map((step, index) => (
            <motion.div key={step} initial={{ opacity: 0, x: index % 2 ? 40 : -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.45 }} transition={{ duration: 0.55 }} className="relative mb-5 rounded-[1.7rem] border border-graphite/10 bg-white/75 p-6 shadow-card md:ml-[calc(var(--i)*2rem)]" style={{ "--i": index } as CSSProperties}>
              <div className="flex gap-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-graphite text-lg font-black text-white">{index + 1}</span>
                <p className="text-lg font-bold leading-8">{step}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-5 py-20 md:px-8">
        <SectionTitle eyebrow="Отзывы" title="Что говорят участники" text="Пример того, какой результат должен почувствовать ученик после практикума." />
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <motion.figure key={item.name} whileHover={{ y: -8 }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="rounded-[2rem] bg-blush/70 p-7 shadow-card">
              <div className="mb-5 text-3xl text-fuchsia">★★★★★</div>
              <blockquote className="leading-7 text-softGraphite">“{item.text}”</blockquote>
              <figcaption className="mt-6 font-black">{item.name}</figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      <section id="faq" className="px-5 py-20 md:px-8">
        <SectionTitle eyebrow="FAQ" title="Частые вопросы" text="Короткие ответы, чтобы снять сомнения перед заявкой." />
        <div className="mx-auto max-w-4xl space-y-3">
          {faqs.map(([question, answer], index) => (
            <div key={question} className="overflow-hidden rounded-3xl border border-graphite/10 bg-white/75 shadow-sm">
              <button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} className="flex w-full items-center justify-between gap-4 p-6 text-left text-lg font-black">
                {question}<span className="text-fuchsia">{openFaq === index ? "−" : "+"}</span>
              </button>
              <motion.div initial={false} animate={{ height: openFaq === index ? "auto" : 0, opacity: openFaq === index ? 1 : 0 }} className="overflow-hidden">
                <p className="px-6 pb-6 leading-7 text-softGraphite/80">{answer}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      <section id="lead" className="px-5 pb-24 pt-10 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.3rem] bg-graphite p-6 text-white shadow-card md:grid-cols-[0.85fr_1.15fr] md:p-10">
          <div className="flex flex-col justify-between rounded-[1.7rem] bg-fuchsia p-7 shadow-glow">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-white/75">Заявка</p>
              <h2 className="mt-4 text-4xl font-black md:text-5xl">Хотите внедрить ИИ в бизнес без перегруза?</h2>
              <p className="mt-5 leading-7 text-white/80">Оставьте контакты — мы свяжемся, ответим на вопросы и подскажем, подходит ли практикум под ваши задачи.</p>
            </div>
            <p className="mt-10 rounded-2xl bg-white/15 p-4 text-sm font-bold">Формат: 2 дня × 4 часа, материалы и шаблоны — в общей супергруппе.</p>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[1.7rem] bg-white p-5 text-graphite md:p-7">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block text-sm font-bold">Имя<input required className="mt-2 w-full rounded-2xl border border-graphite/10 bg-milk px-4 py-4 outline-none transition focus:border-fuchsia" placeholder="Ваше имя" /></label>
              <label className="block text-sm font-bold">Email или телефон<input required className="mt-2 w-full rounded-2xl border border-graphite/10 bg-milk px-4 py-4 outline-none transition focus:border-fuchsia" placeholder="Как с вами связаться" /></label>
            </div>
            <label className="mt-4 block text-sm font-bold">Сообщение<textarea required rows={5} className="mt-2 w-full resize-none rounded-2xl border border-graphite/10 bg-milk px-4 py-4 outline-none transition focus:border-fuchsia" placeholder="Расскажите, какая задача в бизнесе сейчас самая важная" /></label>
            <button className="mt-5 w-full rounded-full bg-graphite px-8 py-4 text-base font-black text-white transition hover:-translate-y-1 hover:bg-fuchsia" type="submit">Отправить заявку</button>
            {sent && <p className="mt-4 rounded-2xl bg-blush p-4 text-center font-bold text-darkFuchsia">Спасибо! Заявка отправлена. Скоро с вами свяжутся.</p>}
          </form>
        </div>
      </section>
    </main>
  );
}
