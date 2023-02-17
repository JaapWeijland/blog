import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LinkButton } from '../../shared/atoms/Button';
import { GoodReadItem } from './GoodReadItem';

export default {
    title: 'Books/Molecules/GoodReadItem',
    component: GoodReadItem,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof GoodReadItem>;

export const Singular: ComponentStory<typeof GoodReadItem> = (args) => (
    <GoodReadItem {...args} />
);

Singular.args = {
    author: 'Nicole Forsgren, Jez Humble, Gene Kim',
    title: 'Elite performance',
    description:
        'Team Topologies elaborates on the different kind of teams one need in a high performing, large scale IT company.',
    slots: {
        buttons: (
            <>
                <LinkButton to="/">react.js</LinkButton>
                <LinkButton to="/">next.js</LinkButton>
            </>
        ),
    },
    to: '/',
    image: {
        src: 'https://media.s-bol.com/NkMzMgDyNJEL/801x1200.jpg',
        alt: 'art',
    },
};
