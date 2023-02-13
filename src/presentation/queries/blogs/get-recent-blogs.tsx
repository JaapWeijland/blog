import { blogService } from '@blog/domain/blogs/services/blog-service';
import { useQuery } from '@tanstack/react-query';

export const getRecentBlogsQuery = () => {
    return [
        ['getRecentBlogs'],
        async () => {
            return blogService.getRecentBlogs();
        },
    ] as const;
};

export const useGetRecentBlogsQuery = () => {
    return useQuery(...getRecentBlogsQuery());
};
