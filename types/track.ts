import type { Album, Artist, AudioFeatures, ExternalUrls } from './';

export type Track = {
    album: Album,
    artists: Artist[],
    audioFeatures: AudioFeatures,
    availableMarkets: string[],
    discNumber: number,
    durationMs: number,
    explicit: boolean,
    externalUrls: ExternalUrls,
    href: string,
    id: string,
    name: string,
    popularity: number,
    previewUrl: string,
    trackNumber: number,
    uri: string,
};
