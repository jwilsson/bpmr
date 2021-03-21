import transformKeys from 'lodash-humps';

export default {
    tracks: async (parent, args, context) => {
        const { body } = await context.client.searchTracks(args.query);

        return transformKeys(body.tracks.items);
    },
};
