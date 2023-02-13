import { useGetAllBlogsQuery } from '@blog/presentation/queries/blogs/get-all-blogs';
import { toReadableDateTime } from '@blog/presentation/utils/time';
import { BlogItem } from '../molecules/BlogItem';
import { BlogsSection } from './BlogsSection';

export interface BlogsPageBlogsSectionProps {}

export const BlogsPageBlogsSection = ({}: BlogsPageBlogsSectionProps) => {
    const { data: blogs } = useGetAllBlogsQuery();

    return (
        <BlogsSection title="Blogs">
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
        </BlogsSection>
    );
};
