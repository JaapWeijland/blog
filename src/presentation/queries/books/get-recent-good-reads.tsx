import { bookService } from '@blog/domain/books/services/book-service';
import { useQuery } from '@tanstack/react-query';

export const getRecentGoodReadsQuery = () => {
    return [
        ['getRecentGoodReads'],
        async () => {
            return bookService.getRecentGoodReads();
        },
    ] as const;
};

export const useGetRecentGoodReadsQuery = () => {
    return useQuery(...getRecentGoodReadsQuery());
};
