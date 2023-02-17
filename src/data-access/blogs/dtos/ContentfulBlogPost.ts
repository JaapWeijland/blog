import { Entry } from 'contentful';

export interface ContentfulBlogPost {
    title: string;
    description: string;
    slug: string;
    content: string;
    authors?: Entry<{
        firstName: string;
        lastName: string;
    }>[];
    tags?: string[];
}
