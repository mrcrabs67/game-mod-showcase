type GameDetailsPageProps = {
    params: Promise<{
        gameSlug: string;
    }>;
};

export default async function GameDetailsPage({
                                                  params,
                                              }: GameDetailsPageProps) {
    const { gameSlug } = await params;

    return (
        <section className="game-details-page space-y-4">
            <h1 className="game-details-page__title text-3xl font-bold">
                Страница игры
            </h1>

            <p className="game-details-page__slug text-zinc-400">
                Текущий slug: {gameSlug}
            </p>
        </section>
    );
}