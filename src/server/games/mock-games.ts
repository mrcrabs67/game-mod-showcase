import type { Game } from "@/entities/game/model/types";
import { mockGenres } from "@/server/genres/mock-genres";

const rpgGenre = mockGenres.find((genre) => genre.slug === "rpg")!;
const actionGenre = mockGenres.find((genre) => genre.slug === "action")!;
const adventureGenre = mockGenres.find(
    (genre) => genre.slug === "adventure",
)!;
const immersiveSimGenre = mockGenres.find(
    (genre) => genre.slug === "immersive-sim",
)!;
const openWorldGenre = mockGenres.find(
    (genre) => genre.slug === "open-world",
)!;

export const mockGames: Game[] = [
    {
        id: "game-two-worlds",
        slug: "two-worlds",
        title: "Two Worlds",
        shortDescription:
            "Классическая RPG с авторской upscale/graphics-сборкой и гайдом по установке.",
        releaseDate: "2007-08-24",
        steamUrl: "https://store.steampowered.com/app/1930/Two_Worlds_Epic_Edition/",
        headerImageUrl:
            "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1930/header.jpg",
        genres: [rpgGenre, actionGenre, openWorldGenre],
        build: {
            id: "build-two-worlds-main",
            slug: "two-worlds-main-build",
            title: "Two Worlds: Till Then I'll Play The Game",
            summary:
                "Сборка с упором на визуальное обновление, улучшение текстур и общее приведение картинки к более современному виду.",
            sourceArticleUrl: "https://dtf.ru/games/2939841-two-worlds-till-then-ill-play-the-game",
            materials: [
                {
                    id: "material-two-worlds-upscale-pack",
                    title: "Upscale texture pack",
                    kind: "texture-pack",
                    url: null,
                    isRequired: true,
                    note: "Основной пакет обновленных текстур.",
                },
                {
                    id: "material-two-worlds-reshade",
                    title: "Custom ReShade preset",
                    kind: "reshade",
                    url: null,
                    isRequired: false,
                    note: "Опциональный пресет для постобработки.",
                },
            ],
            sections: [
                {
                    id: "section-two-worlds-about",
                    type: "about-game",
                    title: "Об игре и сборке",
                    content:
                        "Кратко опиши, почему выбрана именно эта игра и что именно улучшает сборка.",
                    order: 1,
                },
                {
                    id: "section-two-worlds-installation",
                    type: "installation",
                    title: "Установка",
                    content:
                        "Добавь пошаговую инструкцию: чистая установка игры, копирование файлов, настройка конфигов.",
                    order: 2,
                },
                {
                    id: "section-two-worlds-recommendations",
                    type: "recommendations",
                    title: "Рекомендации",
                    content:
                        "Опиши рекомендуемые настройки графики, known issues и полезные советы.",
                    order: 3,
                },
            ],
        },
    },
    {
        id: "game-deus-ex",
        slug: "deus-ex",
        title: "Deus Ex",
        shortDescription:
            "Заготовка под будущую страницу игры со сборкой и дополнительными модами.",
        releaseDate: "2000-06-23",
        steamUrl: "https://store.steampowered.com/app/6910/Deus_Ex_Game_of_the_Year_Edition/",
        headerImageUrl:
            "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/6910/header.jpg",
        genres: [rpgGenre, actionGenre, immersiveSimGenre],
        build: {
            id: "build-deus-ex-main",
            slug: "deus-ex-main-build",
            title: "Deus Ex Visual Build",
            summary:
                "Будущая сборка с улучшенными текстурами, фиксамии и графическими надстройками.",
            sourceArticleUrl: null,
            materials: [
                {
                    id: "material-deus-ex-renderer",
                    title: "Updated renderer",
                    kind: "tool",
                    url: null,
                    isRequired: true,
                    note: "Современный renderer для корректного запуска.",
                },
            ],
            sections: [
                {
                    id: "section-deus-ex-about",
                    type: "about-game",
                    title: "Об игре",
                    content: "Черновой контент.",
                    order: 1,
                },
            ],
        },
    },
    {
        id: "game-gothic-2",
        slug: "gothic-2",
        title: "Gothic 2",
        shortDescription:
            "Черновая карточка под каталог и будущую модифицированную сборку.",
        releaseDate: "2002-11-29",
        steamUrl: "https://store.steampowered.com/app/39510/Gothic_II_Gold_Edition/",
        headerImageUrl:
            "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/39510/header.jpg",
        genres: [rpgGenre, adventureGenre, openWorldGenre],
        build: null,
    },
];