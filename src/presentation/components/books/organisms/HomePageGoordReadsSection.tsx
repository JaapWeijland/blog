import { useGetRecentGoodReadsQuery } from '@blog/presentation/queries/books/get-recent-good-reads';
import { PageSection } from '../../shared/molecules/PageSection';
import { GoodReadItem } from '../molecules/GoodReadItem';

export const HomePageGoodReadsSection = () => {
    const { data: books, isLoading } = useGetRecentGoodReadsQuery();

    return (
        <PageSection title="Good Reads">
            {books?.map((book) => {
                return (
                    <GoodReadItem
                        to={`/blogs/${book.slug}`}
                        key={book.title}
                        author={book.authors
                            .map((author) =>
                                [author.firstName, author.lastName].join(' ')
                            )
                            .join(', ')}
                        title={book.title}
                        description={book.description}
                        image={{
                            alt: book.image.alt,
                            src: book.image.src,
                        }}
                    />
                );
            })}
            {!books?.length && (
                <p className="text-center p-4 max-w-lg mx-auto text-neutral-500">
                    Currently there are no good reads available. Please come
                    back later!
                </p>
            )}
        </PageSection>
    );
};
