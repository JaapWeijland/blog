import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Heading } from './Heading';

export default {
    title: 'Shared/Atoms/Heading',
    component: Heading,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof Heading>;

export const Singular: ComponentStory<typeof Heading> = (args) => (
    <Heading {...args} />
);

Singular.args = {
    children: 'Some beautiful header',
};
