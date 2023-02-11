import Link from 'next/link';

export interface MenuLinkProps {
    children?: React.ReactNode;
    to: string;
}

export const MenuLink = ({ to, children }: MenuLinkProps) => {
    return (
        <Link
            href={to}
            className="text-neutral-50 text-lg no-underline hover:underline"
        >
            {children}
        </Link>
    );
};
