import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from './Button';

export default {
    title: 'Shared/Atoms/Button',
    component: Button,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof Button>;

export const Singular: ComponentStory<typeof Button> = (args) => (
    <Button {...args} />
);

Singular.args = {
    children: 'Show all',
};
