export type BuildSectionType =
    | "about-game"
    | "build-contents"
    | "installation"
    | "launch-setup"
    | "recommendations"
    | "used-materials";

export type BuildMaterialKind =
    | "tool"
    | "mod"
    | "patch"
    | "reshade"
    | "texture-pack";

export type BuildSection = {
    id: string;
    type: BuildSectionType;
    title: string;
    content: string;
    order: number;
};

export type BuildMaterial = {
    id: string;
    title: string;
    kind: BuildMaterialKind;
    url: string | null;
    isRequired: boolean;
    note: string | null;
};

export type Build = {
    id: string;
    slug: string;
    title: string;
    summary: string;
    sourceArticleUrl: string | null;
    sections: BuildSection[];
    materials: BuildMaterial[];
};