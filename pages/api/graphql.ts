import type { NextApiRequest, NextApiResponse } from 'next';
import { ApolloServer } from 'apollo-server-micro';
import SpotifyWebApi from 'spotify-web-api-node';

import typeDefs from '../../resolvers/schema';
import resolvers from '../../resolvers';

const setupApolloServer = async () => {
    const apolloServer = new ApolloServer({
        context: async () => {
            const client = new SpotifyWebApi({
                clientId: process.env.SPOTIFY_ID,
                clientSecret: process.env.SPOTIFY_SECRET,
            });

            try {
                const { body } = await client.clientCredentialsGrant();

                client.setAccessToken(body.access_token);
            } catch (e) {
                console.error(`Could not retrieve an access token: ${e}`);
            }

            return {
                client,
            };
        },
        resolvers,
        typeDefs,
    });

    await apolloServer.start();

    return apolloServer;
};

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const apolloServer = await setupApolloServer();
    const apolloHandler = apolloServer.createHandler({
        path: '/api/graphql',
    });

    return await apolloHandler(req, res);
};
