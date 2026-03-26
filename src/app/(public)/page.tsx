import Link from "next/link";

export default function HomePage() {
  return (
      <section className="home-page space-y-4">
        <h1 className="home-page__title text-3xl font-bold">
          Game Mod Showcase
        </h1>

        <p className="home-page__description text-base text-zinc-400">
          Каталог сборок, гайдов по установке и дополнительных модов для игр.
        </p>

        <Link
            href="/games"
            className="home-page__link inline-flex rounded-md border px-4 py-2"
        >
          Перейти в каталог
        </Link>
      </section>
  );
}