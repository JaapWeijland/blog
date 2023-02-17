import { Heading } from '../atoms/Heading';

export interface PageSectionProps {
    children: React.ReactNode;
    title?: string;
    slots?: {
        bottom?: React.ReactNode;
    };
}

export const PageSection = ({ title, children, slots }: PageSectionProps) => {
    return (
        <div className="flex flex-col gap-12 items-stretch">
            {title && <Heading>{title}</Heading>}
            {children}
            {slots?.bottom && <div className="flex">{slots.bottom}</div>}
        </div>
    );
};
