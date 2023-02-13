import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BlogItem } from './BlogItem';

export default {
    title: 'Blogs/Molecules/BlogItem',
    component: BlogItem,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof BlogItem>;

export const Singular: ComponentStory<typeof BlogItem> = (args) => (
    <BlogItem {...args} />
);

Singular.args = {
    to: '/',
    superTitle: '17 januari 2022',
    title: "Why you don't need Redux",
    subTitle: 'A small blog to tell you a thing or two',
};
