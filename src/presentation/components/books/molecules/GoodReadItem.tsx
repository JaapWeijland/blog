export interface GoodReadItemProps {
    author: string;
    title: string;
    description: string;
    slots?: {
        buttons?: React.ReactNode;
    };
    image?: {
        src: string;
        alt: string;
    };
}

export const GoodReadItem = ({}: GoodReadItemProps) => {
    return <div></div>;
};
