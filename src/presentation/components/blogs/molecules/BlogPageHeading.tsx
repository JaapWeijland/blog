import { Heading } from '../../shared/atoms/Heading';
import { Tag } from '../../shared/atoms/Tag';

export interface BlogPageHeadingProps {
    superTitle?: string;
    title: string;
    slots?: {
        tags: React.ReactNode;
    };
}

export const BlogPageHeading = ({
    superTitle,
    title,
    slots,
}: BlogPageHeadingProps) => {
    return (
        <div className="flex flex-col gap-6 items-stretch">
            {superTitle && (
                <div className="text-blog-400 text-xl font-light">
                    {superTitle}
                </div>
            )}
            <Heading>{title}</Heading>
            <div className="flex gap-4 items-center">
                {slots?.tags}
                <PhantomTag />
            </div>
        </div>
    );
};

const PhantomTag = () => {
    return (
        <div className="invisible">
            <Tag>Phantom Tag</Tag>
        </div>
    );
};
