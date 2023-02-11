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
