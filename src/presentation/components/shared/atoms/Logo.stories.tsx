import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Logo } from './Logo';

export default {
    title: 'Shared/Atoms/Logo',
    component: Logo,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof Logo>;

export const Singular: ComponentStory<typeof Logo> = (args) => (
    <Logo {...args} />
);

Singular.args = {
    children: 'Show all',
};
