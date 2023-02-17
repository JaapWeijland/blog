import { Author } from '@blog/domain/blogs/models/Author';

export interface Book {
    authors: Author[];
    title: string;
    slug: string;
    description: string;
    image: {
        src: string;
        alt: string;
    };
    publishedAt: number;
}
