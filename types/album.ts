import type { Artist, Image } from './';

export type Album = {
    albumGroup: string,
    albumType: string,
    artists: Artist[],
    availableMarkets: string[],
    href: string,
    id: string,
    images: Image[],
    name: string,
    releaseDate: string,
    releaseDatePrecision: string,
    type: string,
    uri: string,
};
