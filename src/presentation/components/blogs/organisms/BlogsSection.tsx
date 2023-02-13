import { Heading } from '../../shared/atoms/Heading';

export interface BlogsSectionProps {
    children: React.ReactNode;
    title?: string;
    slots?: {
        bottom?: React.ReactNode;
    };
}

export const BlogsSection = ({ title, children, slots }: BlogsSectionProps) => {
    return (
        <div className="flex flex-col gap-12 items-stretch">
            {title && <Heading>{title}</Heading>}
            {children}
            {slots?.bottom && <div className="flex">{slots.bottom}</div>}
        </div>
    );
};
