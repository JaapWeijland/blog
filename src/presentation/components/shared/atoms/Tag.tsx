export interface TagProps {
    children: React.ReactNode;
}

export const Tag = ({ children }: TagProps) => {
    return (
        <span className="text-sm text-neutral-300 font-light py-0 px-3 pb-0.5 rounded-lg border border-neutral-300 leading-relaxed">
            {children}
        </span>
    );
};
