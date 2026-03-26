import type { Build } from "@/entities/build/model/types";
import type { Genre } from "@/entities/genre/model/types";

export type Game = {
    id: string;
    slug: string;
    title: string;
    shortDescription: string;
    releaseDate: string | null;
    steamUrl: string | null;
    headerImageUrl: string | null;
    genres: Genre[];
    build: Build | null;
};