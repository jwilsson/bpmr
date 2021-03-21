import { gql } from 'apollo-server-micro';

export default gql`
    schema {
        query: Query
    }

    type Query {
        tracks(query: String!): [Track]!
    }

    type AlbumSimplified {
        albumGroup: String
        albumType: String!
        artists: [ArtistSimplified!]!
        availableMarkets: [String!]!
        externalUrls: ExternalUrls!
        href: String!
        id: ID!
        images: [Image!]!
        name: String!
        releaseDate: String!
        releaseDatePrecision: String!
        type: String!
        uri: String!
    }

    type ArtistSimplified {
        externalUrls: ExternalUrls!
        href: String!
        id: ID!
        name: String!
        type: String!
        uri: String!
    }

    type AudioFeatures {
        acousticness: Float!
        analysisUrl: String!
        danceability: Float!
        durationMs: Int!
        energy: Float!
        id: ID!
        instrumentalness: Float!
        key: Int!
        liveness: Float!
        loudness: Float!
        mode: Int!
        speechiness: Float!
        tempo: Float!
        timeSignature: Int!
        trackHref: String!
        type: String!
        uri: String!
        valence: Float!
    }

    type ExternalId {
        ean: String
        isrc: String
        upc: String
    }

    type ExternalUrls {
        spotify: String!
    }

    type Image {
        height: Int!
        url: String!
        width: Int!
    }

    type Restrictions {
        reason: String!
    }

    type Section {
        confidence: Float!
        duration: Float!
        key: Int!
        keyConfidence: Float!
        loudness: Float!
        mode: Int!
        modeConfidence: Float!
        start: Float!
        tempo: Float!
        tempoConfidence: Float!
        timeSignature: Int!
        timeSignatureConfidence: Float!
    }

    type Segment {
        confidence: Float!
        duration: Float!
        loudnessEnd: Float!
        loudnessMax: Float!
        loudnessMaxTime: Float!
        loudnessStart: Float!
        pitches: [Float!]!
        start: Float!
        timbre: [Float!]!
    }

    type TimeInterval {
        confidence: Float!
        duration: Float!
        start: Float!
    }

    type TrackLink {
        externalUrls: ExternalUrls!
        href: String!
        id: ID!
        type: String!
        uri: String!
    }

    type Track {
        album: AlbumSimplified!
        artists: [ArtistSimplified!]!
        audioFeatures: AudioFeatures!
        availableMarkets: [String!]!
        discNumber: Int!
        durationMs: Int!
        explicit: Boolean!
        externalUrls: ExternalUrls!
        href: String!
        id: ID!
        name: String!
        popularity: Int!
        previewUrl: String!
        trackNumber: Int!
        uri: String!
    }
`;
