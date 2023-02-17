import { createContentfulClient } from '@blog/data-access/shared/contentful-client';
import { Blog } from '@blog/domain/blogs/models/Blog';
import { ContentfulClientApi } from 'contentful';
import { ContentfulBlogPost } from '../dtos/ContentfulBlogPost';
import { ContentfulBlogPostMapper } from '../mappers/contentful-blog-mapper';
import { IBlogRepository } from './blog-repository';

export class ContentfulBlogRepository implements IBlogRepository {
    constructor(private client: ContentfulClientApi) {}

    async getAllBlogs(): Promise<Blog[]> {
        const blogs = await this.client.getEntries<ContentfulBlogPost>({
            content_type: 'blog-post',
            order: 'sys.createdAt',
        });

        return blogs.items.map((item) => {
            return new ContentfulBlogPostMapper(item).toBlog();
        });
    }

    async getAllBlogSlugs(): Promise<string[]> {
        const blogs = await this.getAllBlogs();

        return blogs.map((blog) => blog.slug);
    }

    async getBlogBySlug(slug: string): Promise<Blog> {
        const blogs =
            await this.client.withoutUnresolvableLinks.getEntries<ContentfulBlogPost>(
                {
                    content_type: 'blog-post',
                    'fields.slug': slug,
                }
            );

        if (blogs.total === 0) throw new Error('Could not find blog with slug');

        return new ContentfulBlogPostMapper(blogs.items[0]).toBlog();
    }

    async getBlog(id: string): Promise<Blog> {
        const blog = await this.client.getEntry<ContentfulBlogPost>(id);

        return new ContentfulBlogPostMapper(blog).toBlog();
    }

    async getRecentBlogs(
        args?: { amount: number } | undefined
    ): Promise<Blog[]> {
        const blogs =
            await this.client.withoutUnresolvableLinks.getEntries<ContentfulBlogPost>(
                {
                    content_type: 'blog-post',
                    order: 'sys.createdAt',
                    limit: args?.amount ?? 3,
                }
            );

        return blogs.items.map((item) => {
            return new ContentfulBlogPostMapper(item).toBlog();
        });
    }
}

export const contentfulBlogRepository = new ContentfulBlogRepository(
    createContentfulClient()
);
