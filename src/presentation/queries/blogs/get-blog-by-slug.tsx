import { blogService } from '@blog/domain/blogs/services/blog-service';
import { useQuery } from '@tanstack/react-query';

export const getBlogBySlugQuery = (slug: string) => {
    return [
        ['getBlogBySlug', slug],
        async () => {
            return blogService.getBlogBySlug(slug);
        },
    ] as const;
};

export const useGetBlogBySlugQuery = (slug: string) => {
    return useQuery(...getBlogBySlugQuery(slug));
};
