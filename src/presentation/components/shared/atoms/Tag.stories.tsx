import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Tag } from './Tag';

export default {
    title: 'Shared/Atoms/Tag',
    component: Tag,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof Tag>;

export const Singular: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

Singular.args = {
    children: 'react.js',
};
