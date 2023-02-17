import Link from 'next/link';

export interface ButtonBaseProps {
    children?: React.ReactNode;
}

export const ButtonBase = ({ children }: ButtonBaseProps) => {
    return (
        <div className="px-6 py-1 rounded-full bg-neutral-700 text-neutral-200 font-light hover:bg-neutral-600 transition-colors">
            {children}
        </div>
    );
};

export interface ButtonProps extends ButtonBaseProps {
    onClick: () => void;
}

export const Button = ({ onClick, ...baseButtonProps }: ButtonProps) => {
    return (
        <button className="contents" onClick={onClick}>
            <ButtonBase {...baseButtonProps} />
        </button>
    );
};

export interface LinkButtonProps extends ButtonBaseProps {
    to: string;
}

export const LinkButton = ({ to, ...baseButtonProps }: LinkButtonProps) => {
    return (
        <Link href={to} className="contents">
            <ButtonBase {...baseButtonProps} />
        </Link>
    );
};
