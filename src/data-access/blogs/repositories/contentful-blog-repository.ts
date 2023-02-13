import { Blog } from '@blog/domain/blogs/models/Blog';
import { IBlogRepository } from './blog-repository';

export class ContentfulBlogRepository implements IBlogRepository {
    getAllBlogs(): Promise<Blog[]> {
        throw new Error('Method not implemented.');
    }
    getAllBlogSlugs(): Promise<string[]> {
        throw new Error('Method not implemented.');
    }
    getBlogBySlug(slug: string): Promise<Blog> {
        throw new Error('Method not implemented.');
    }
    getBlog(id: string): Promise<Blog> {
        throw new Error('Method not implemented.');
    }
    getRecentBlogs(args?: { amount: number } | undefined): Promise<Blog[]> {
        throw new Error('Method not implemented.');
    }
}
