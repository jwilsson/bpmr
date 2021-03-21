import transformKeys from 'lodash-humps';

export default {
    audioFeatures: async (parent, args, context) => {
        const { body } = await context.client.getAudioFeaturesForTrack(parent.id);

        return transformKeys(body);
    },
};
