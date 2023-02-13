import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Tag } from '../../shared/atoms/Tag';
import { BlogPageHeading } from './BlogPageHeading';

export default {
    title: 'Blogs/Molecules/BlogPageHeading',
    component: BlogPageHeading,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof BlogPageHeading>;

export const Singular: ComponentStory<typeof BlogPageHeading> = (args) => (
    <BlogPageHeading {...args} />
);

Singular.args = {
    superTitle: '17 januari 2024',
    title: "Why you probably don't need state management",
    slots: {
        tags: (
            <>
                <Tag>react.js</Tag>
                <Tag>next.js</Tag>
                <Tag>tailwind</Tag>
                <Tag>graphql</Tag>
            </>
        ),
    },
};
