import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NavigationMenu } from './NavigationMenu';

export default {
    title: 'Shared/Organisms/NavigationMenu',
    component: NavigationMenu,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof NavigationMenu>;

export const Singular: ComponentStory<typeof NavigationMenu> = (args) => (
    <NavigationMenu {...args} />
);

Singular.args = {
    children: 'Good Reads',
};
