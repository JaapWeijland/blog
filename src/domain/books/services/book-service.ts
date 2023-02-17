import { IBookRepository } from '@blog/data-access/books/book-repository';
import { localBookRepository } from '@blog/data-access/books/local-book-repository';

export class BookService {
    constructor(private bookRepository: IBookRepository) {}

    async getRecentGoodReads() {
        return this.bookRepository.getRecentGoodReads();
    }
}

export const bookService = new BookService(localBookRepository);
