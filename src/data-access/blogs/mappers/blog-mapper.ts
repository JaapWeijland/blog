import { Blog } from '@blog/domain/blogs/models/Blog';

export interface IBlogMapper {
    toBlog(): Blog;
}
