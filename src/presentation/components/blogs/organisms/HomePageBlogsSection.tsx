import { LinkButton } from '../../shared/atoms/Button';
import { Heading } from '../../shared/atoms/Heading';
import { BlogItem } from '../molecules/BlogItem';

const BLOGS = [
    {
        slug: '/blog-1',
        date: '11 januari 2023',
        title: "Why you don't need state management",
        description: "Don't invent the wheel and use excellent libraries",
    },
    {
        slug: '/blog-2',
        date: '28 juni 2022',
        title: 'The unconditional React Hook',
        description: 'How to deal with hooks and conditionality',
    },
    {
        slug: '/blog-3',
        date: '7 januari 2022',
        title: 'Build your performance with NX',
        description: 'Why NX will make your team an elite performer',
    },
    {
        slug: '/blog-4',
        date: '27 november 2021',
        title: 'Willingly without children',
        description: 'When to pass model props and when to pass children',
    },
    {
        slug: '/blog-5',
        date: '11 september 2021',
        title: 'Performance on Azure',
        description:
            'Things to take into account when servering your SSR application on Azure Web Services',
    },
];

export interface HomePageBlogsSectionProps {}

export const HomePageBlogsSection = ({}: HomePageBlogsSectionProps) => {
    return (
        <div className="flex flex-col gap-12 items-stretch">
            <Heading>Latest Blogs</Heading>
            {BLOGS.map((blog) => {
                return (
                    <BlogItem
                        to={`/blogs/${blog.slug}`}
                        key={blog.title}
                        superTitle={blog.date}
                        title={blog.title}
                        subTitle={blog.description}
                    />
                );
            })}
            <div className="flex">
                <LinkButton to={'/blogs'}>Show all blogs</LinkButton>
            </div>
        </div>
    );
};
