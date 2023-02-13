import { Tag } from 'blog/domain/shared/models/Tag';
import { Author } from './Author';

export interface Blog {
    id: string;
    slug: string;

    author: Author;

    title: string;
    description: string;
    content: string;

    publishedAt: number;

    tags: Tag[];
}
