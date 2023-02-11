import { LinkButton } from '../../shared/atoms/Button';

export interface BlogItemProps {
    superTitle?: string;
    title: string;
    subTitle: string;
    to: string;
}

export const BlogItem = ({
    superTitle,
    title,
    subTitle,
    to,
}: BlogItemProps) => {
    return (
        <div className="flex justify-between items-center">
            <a
                className="flex flex-col gap-2 items-stretch text-neutral-50 group cursor-pointer no-underline"
                href={to}
            >
                {superTitle && (
                    <div className="text-sm font-light text-blog-400">
                        {superTitle}
                    </div>
                )}
                {title && (
                    <div className="text-xl font-black group-hover:underline">
                        {title}
                    </div>
                )}
                {subTitle && <div className="font-light">{subTitle}</div>}
            </a>
            <LinkButton to={to}>Read blog &rarr;</LinkButton>
        </div>
    );
};
