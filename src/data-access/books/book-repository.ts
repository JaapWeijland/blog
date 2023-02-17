import { Book } from '@blog/domain/books/models/Book';

export interface IBookRepository {
    getRecentGoodReads(): Promise<Book[]>;
}
