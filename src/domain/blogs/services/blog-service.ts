import { IBlogRepository } from '@blog/data-access/blogs/repositories/blog-repository';
import { localBlogRepository } from '@blog/data-access/blogs/repositories/local-blog-repository';
import { Blog } from '../models/Blog';

export class BlogService {
    constructor(private blogRepository: IBlogRepository) {}

    async getRecentBlogs(): Promise<Blog[]> {
        return this.blogRepository.getRecentBlogs({ amount: 3 });
    }

    async getBlog(id: string): Promise<Blog> {
        return this.blogRepository.getBlog(id);
    }

    async getBlogBySlug(slug: string): Promise<Blog> {
        return this.blogRepository.getBlogBySlug(slug);
    }

    async getAllBlogSlugs(): Promise<string[]> {
        return this.blogRepository.getAllBlogSlugs();
    }

    async getAllBlogs(): Promise<Blog[]> {
        return this.blogRepository.getAllBlogs();
    }
}

export const blogService = new BlogService(localBlogRepository);
