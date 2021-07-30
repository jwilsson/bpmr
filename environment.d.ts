declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NEXT_PUBLIC_API_URL: string;
            SPOTIFY_ID: string;
            SPOTIFY_SECRET: string;
        }
    }
}

export {};
