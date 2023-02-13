import { BlogsPageBlogsSection } from '@blog/presentation/components/blogs/organisms/BlogsPageBlogsSection';
import { getAllBlogsQuery } from '@blog/presentation/queries/blogs/get-all-blogs';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { GetStaticProps } from 'next';
import Head from 'next/head';

export default function BlogPostPage({}: {}) {
    return (
        <>
            <Head>
                <title>Blogs - Weijland.IT</title>
                <meta
                    name="description"
                    content="A listing of all blogs found on Weijland.IT"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <BlogsPageBlogsSection />
        </>
    );
}

export const getStaticProps: GetStaticProps = async (context) => {
    const queryClient = new QueryClient();

    const query = getAllBlogsQuery();

    await Promise.all([queryClient.prefetchQuery(...query)]);

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
};
