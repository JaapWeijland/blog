import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MenuLink } from './MenuLink';

export default {
    title: 'Shared/Atoms/MenuLink',
    component: MenuLink,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof MenuLink>;

export const Singular: ComponentStory<typeof MenuLink> = (args) => (
    <MenuLink {...args} />
);

Singular.args = {
    children: 'Good Reads',
    to: 'somewhere',
};
