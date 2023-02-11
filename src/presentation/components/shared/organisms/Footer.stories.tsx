import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Footer } from './Footer';

export default {
    title: 'Shared/Organisms/Footer',
    component: Footer,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof Footer>;

export const Singular: ComponentStory<typeof Footer> = (args) => (
    <Footer {...args} />
);

Singular.args = {
    children: 'Good Reads',
};
