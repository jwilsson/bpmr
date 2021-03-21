import { ApolloServer } from 'apollo-server-micro';
import SpotifyWebApi from 'spotify-web-api-node';

import typeDefs from '../../resolvers/schema';
import resolvers from '../../resolvers';

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

export const config = {
    api: {
        bodyParser: false,
    },
};

export default apolloServer.createHandler({
    path: '/api/graphql',
});
