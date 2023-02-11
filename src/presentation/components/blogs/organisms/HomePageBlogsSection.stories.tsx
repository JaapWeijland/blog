import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HomePageBlogsSection } from './HomePageBlogsSection';

export default {
    title: 'Blogs/Organisms/HomePageBlogsSection',
    component: HomePageBlogsSection,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof HomePageBlogsSection>;

export const Singular: ComponentStory<typeof HomePageBlogsSection> = (args) => (
    <HomePageBlogsSection {...args} />
);

Singular.args = {
    toAllBlogs: '/blogs',
};
