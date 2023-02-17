import { createClient } from 'contentful';

export const createContentfulClient = () => {
    if (
        !process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN ||
        !process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
    )
        throw new Error('Could not find Contentful environment variables');

    return createClient({
        accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
        space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    });
};
