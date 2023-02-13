import { Footer } from '../organisms/Footer';
import { NavigationMenu } from '../organisms/NavigationMenu';

export interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="py-8 px-4 max-w-5xl mx-auto w-full flex flex-col gap-36 items-stretch">
            <NavigationMenu />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
