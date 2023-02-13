import Image from 'next/image';
import Link from 'next/link';

export interface LogoProps {
    to: string;
}

import logo from '../../../../../public/images/weijland-it-logo.png';

export const Logo = ({ to }: LogoProps) => {
    return (
        <Link href={to} className="flex gap-5 items-center no-underline">
            <Image alt="Weijland.IT" width={67} height={82} src={logo} />
            <div className="flex flex-col items-stretch gap-1">
                <span className="font-black text-lg text-neutral-50 tracking-tighter">
                    WEIJLAND.IT
                </span>
                <span className="font-regular text-neutral-400 text-xs w-36">
                    Hi, my name is Jaap. I blog about my projects.
                </span>
            </div>
        </Link>
    );
};
