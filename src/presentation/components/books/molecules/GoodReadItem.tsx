import Image from 'next/image';
import Link from 'next/link';

export interface GoodReadItemProps {
    author?: string;
    title?: string;
    description?: string;
    slots?: {
        buttons?: React.ReactNode;
    };
    image?: {
        src: string;
        alt: string;
    };
    to: string;
}

export const GoodReadItem = ({
    image,
    to,
    author,
    title,
    description,
    slots,
}: GoodReadItemProps) => {
    return (
        <Link
            href={to}
            className="flex gap-4 text-neutral-50 no-underline group"
        >
            {image && (
                <Image
                    alt={image.alt}
                    src={image.src}
                    width={128}
                    height={191}
                />
            )}
            <div className="flex flex-col gap-6 py-1">
                <div className="flex flex-col gap-2">
                    {author && (
                        <div className="text-sm font-light text-book-400">
                            {author}
                        </div>
                    )}
                    {title && (
                        <div className="text-xl font-black leading-none group-hover:underline">
                            {title}
                        </div>
                    )}
                    {description && (
                        <div className="font-light leading-loose">
                            {description}
                        </div>
                    )}
                </div>
                {slots?.buttons && (
                    <div className="flex gap-4">{slots.buttons}</div>
                )}
            </div>
        </Link>
    );
};
