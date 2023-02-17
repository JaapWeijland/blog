import { Blog } from '@blog/domain/blogs/models/Blog';
import { Entry } from 'contentful';
import { DateTime } from 'luxon';
import { ContentfulBlogPost } from '../dtos/ContentfulBlogPost';
import { IBlogMapper } from './blog-mapper';

export class ContentfulBlogPostMapper implements IBlogMapper {
    constructor(private contentfulBlogPostEntry: Entry<ContentfulBlogPost>) {}

    toBlog(): Blog {
        const blog: Blog = {
            id: this.contentfulBlogPostEntry.sys.id,
            title: this.contentfulBlogPostEntry.fields.title,
            description: this.contentfulBlogPostEntry.fields.description,
            content: this.contentfulBlogPostEntry.fields.content,
            authors:
                this.contentfulBlogPostEntry.fields.authors?.map((author) => {
                    return {
                        firstName: author.fields.firstName,
                        lastName: author.fields.lastName,
                    };
                }) ?? [],
            slug: this.contentfulBlogPostEntry.fields.slug,
            publishedAt: DateTime.fromISO(
                this.contentfulBlogPostEntry.sys.createdAt
            ).toMillis(),
            tags:
                this.contentfulBlogPostEntry.fields.tags?.map((tag) => ({
                    label: tag,
                })) ?? [],
        };
        return blog;
    }
}
