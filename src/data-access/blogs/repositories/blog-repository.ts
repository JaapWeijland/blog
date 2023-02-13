import { Blog } from '@blog/domain/blogs/models/Blog';

export interface IBlogRepository {
    getBlog(id: string): Promise<Blog>;
    getBlogBySlug(slug: string): Promise<Blog>;
    getRecentBlogs(args?: { amount: number }): Promise<Blog[]>;
    getAllBlogs(): Promise<Blog[]>;
    getAllBlogSlugs(): Promise<string[]>;
}
