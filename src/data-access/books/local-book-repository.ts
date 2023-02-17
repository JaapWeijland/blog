import { Book } from '@blog/domain/books/models/Book';
import { DateTime } from 'luxon';
import { IBookRepository } from './book-repository';

const BOOKS: Book[] = [
    {
        title: 'Elite performance',
        description:
            'Increase your teams velocity by learning how other companies achieve great success in agile software development.',
        authors: [
            {
                firstName: 'Nicole',
                lastName: 'Forsgren',
            },
            { firstName: 'Jez', lastName: 'Humble' },
            { firstName: 'Gene', lastName: 'Kim' },
        ],
        image: {
            src: 'https://media.s-bol.com/7prlBkpRzYpj/550x827.jpg',
            alt: 'Accelerate',
        },
        publishedAt: DateTime.now().minus({ days: 1 }).toMillis(),
        slug: 'accelerate',
    },
    {
        title: 'Nothing really matters',
        description:
            'Stress in life seems inevitable when working on your career, even as a developer. This book helps to improve your peace of mind by giving insights what is worth stressing about and what isn’t.',
        authors: [
            {
                firstName: 'Mark',
                lastName: 'Manson',
            },
        ],
        image: {
            src: 'https://media.s-bol.com/NkMzMgDyNJEL/801x1200.jpg',
            alt: 'Nothing really matters',
        },
        publishedAt: DateTime.now().minus({ days: 2 }).toMillis(),
        slug: 'subtle-art-of-not-giving-a-fck',
    },
    {
        title: 'Team Topologies',
        description:
            'Team Topologies elaborates on the different kind of teams one need in a high performing, large scale IT company.',
        authors: [
            {
                firstName: 'Matthew',
                lastName: 'Skelton',
            },
            { firstName: 'Manual', lastName: 'Pais' },
        ],
        image: {
            src: 'https://media.s-bol.com/xnLLlLmRJjLP/550x823.jpg',
            alt: 'Team Topologies',
        },
        publishedAt: DateTime.now().minus({ days: 3 }).toMillis(),
        slug: 'team-topologies',
    },
];

export class LocalBookRepository implements IBookRepository {
    async getRecentGoodReads(): Promise<Book[]> {
        return BOOKS.slice(0, 3).sort(
            (b1, b2) => b1.publishedAt - b2.publishedAt
        );
    }
}

export const localBookRepository = new LocalBookRepository();
