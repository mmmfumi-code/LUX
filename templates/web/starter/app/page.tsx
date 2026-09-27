import { Reveal } from "@/components/Reveal";
import { SmoothScroll } from "@/components/SmoothScroll";
import { site } from "@/lib/content";

// 雛形: 12セクションの骨組み。実際のデザインは site-plan.md に沿って作り込む
export default function Page() {
  return (
    <main>
      <SmoothScroll />
      <section id="hero" className="relative flex min-h-svh flex-col justify-center px-6 md:px-16">
        <p className="font-[family-name:var(--font-latin)] text-xs tracking-[0.3em] text-ink-2">{site.hero.eyebrow}</p>
        <h1 className="mt-6 whitespace-pre-line font-[family-name:var(--font-display)] text-5xl leading-tight md:text-7xl">{site.hero.title}</h1>
        <p className="mt-6 max-w-md text-ink-2">{site.hero.lead}</p>
        <a href="#cta" className="mt-10 inline-flex w-fit bg-accent px-8 py-4 text-sm tracking-widest text-white">{site.hero.cta}</a>
      </section>
      {site.sections.map((name) => (
        <section key={name} id={name.toLowerCase().replace(/\s+/g, "-")} className="border-t border-surface px-6 py-32 md:px-16">
          <Reveal>
            <h2 className="font-[family-name:var(--font-latin)] text-xs tracking-[0.3em] text-ink-2">{name.toUpperCase()}</h2>
            <p className="mt-6 text-3xl md:text-5xl">{name}</p>
          </Reveal>
        </section>
      ))}
    </main>
  );
}
