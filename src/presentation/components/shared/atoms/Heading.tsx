import React from 'react';

export interface HeadingProps {
    children?: React.ReactNode;
}

export const Heading = ({ children }: HeadingProps) => {
    return (
        <span className="text-5xl pb-2 font-bold text-neutral-50 tracking-tighter">
            {children}
        </span>
    );
};
