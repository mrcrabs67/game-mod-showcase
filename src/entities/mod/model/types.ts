export type ModCategory =
    | "gameplay"
    | "graphics"
    | "ui"
    | "audio"
    | "fixes"
    | "quality-of-life";

export type Mod = {
    id: string;
    slug: string;
    title: string;
    summary: string;
    category: ModCategory;
    url: string | null;
    isFeatured: boolean;
};