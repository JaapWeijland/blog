import { blogService } from '@blog/domain/blogs/services/blog-service';
import { BlogPageHeading } from '@blog/presentation/components/blogs/molecules/BlogPageHeading';
import { Tag } from '@blog/presentation/components/shared/atoms/Tag';
import { toReadableDateTime } from '@blog/presentation/utils/time';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import {
    getBlogBySlugQuery,
    useGetBlogBySlugQuery,
} from '../../presentation/queries/blogs/get-blog-by-slug';

export default function BlogPostPage() {
    const router = useRouter();
    const { slug } = router.query;

    if (typeof slug !== 'string')
        throw new Error('Params are not correct somehow: ' + slug);

    const { data: blog, isLoading } = useGetBlogBySlugQuery(slug);

    if (isLoading) return <>Loading...</>;

    return (
        <>
            <Head>
                <title>{blog?.title} - Blogs - Weijland.IT</title>
                <meta name="description" content={blog?.description} />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex flex-col items-stretch gap-16">
                {blog && (
                    <BlogPageHeading
                        superTitle={toReadableDateTime(blog.publishedAt)}
                        title={blog.title}
                        slots={{
                            tags: blog.tags?.length ? (
                                <>
                                    {blog.tags.map((tag) => {
                                        return (
                                            <Tag key={tag.label}>
                                                {tag.label}
                                            </Tag>
                                        );
                                    })}
                                </>
                            ) : undefined,
                        }}
                    />
                )}
                {blog?.content && (
                    <div className="flex flex-1 flex-col items-stretch prose-lg  prose-invert font-light leading-relaxed max-w-full">
                        <ReactMarkdown>{blog.content}</ReactMarkdown>
                    </div>
                )}
            </div>
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async (context) => {
    const slugs = await blogService.getAllBlogSlugs();

    const paths = slugs.map((slug) => {
        return {
            params: {
                slug,
            },
        };
    });

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const queryClient = new QueryClient();

    const { slug } = context.params ?? {};

    if (typeof slug !== 'string')
        return {
            notFound: true,
        };

    const query = getBlogBySlugQuery(slug);

    await Promise.all([queryClient.prefetchQuery(...query)]);

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
        revalidate: 10,
    };
};
