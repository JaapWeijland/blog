import { useGetRecentBlogsQuery } from '@blog/presentation/queries/blogs/get-recent-blogs';
import { toReadableDateTime } from '@blog/presentation/utils/time';
import { LinkButton } from '../../shared/atoms/Button';
import { PageSection } from '../../shared/molecules/PageSection';
import { BlogItem } from '../molecules/BlogItem';

export interface HomePageBlogsSectionProps {}

export const HomePageBlogsSection = ({}: HomePageBlogsSectionProps) => {
    const { data: blogs, isLoading } = useGetRecentBlogsQuery();

    return (
        <PageSection
            title={'Latest Blogs'}
            slots={{
                bottom: blogs?.length ? (
                    <>
                        <LinkButton to={'/blogs'}>Show all blogs</LinkButton>
                    </>
                ) : undefined,
            }}
        >
            {blogs?.map((blog) => {
                return (
                    <BlogItem
                        to={`/blogs/${blog.slug}`}
                        key={blog.title}
                        superTitle={toReadableDateTime(blog.publishedAt)}
                        title={blog.title}
                        subTitle={blog.description}
                    />
                );
            })}
            {!blogs?.length && (
                <p className="text-center p-4 max-w-lg mx-auto text-neutral-500">
                    Currently there are no blogs available. Please come back
                    later!
                </p>
            )}
        </PageSection>
    );
};
