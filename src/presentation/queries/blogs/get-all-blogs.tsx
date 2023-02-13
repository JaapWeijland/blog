import { blogService } from '@blog/domain/blogs/services/blog-service';
import { useQuery } from '@tanstack/react-query';

export const getAllBlogsQuery = () => {
    return [
        ['getBlogBySlug'],
        async () => {
            return blogService.getAllBlogs();
        },
    ] as const;
};

export const useGetAllBlogsQuery = () => {
    return useQuery(...getAllBlogsQuery());
};
