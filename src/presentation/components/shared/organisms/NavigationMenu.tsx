import { Logo } from '../atoms/Logo';
import { MenuLink } from '../atoms/MenuLink';

export interface NavigationMenuProps {}

export const NavigationMenu = ({}: NavigationMenuProps) => {
    return (
        <div className="flex justify-between items-center">
            <Logo />
            <div className="flex gap-16">
                <MenuLink to="/blogs">Blogs</MenuLink>
                <MenuLink to="/projects">Projects</MenuLink>
                <MenuLink to="/good-reads">Good Reads</MenuLink>
            </div>
        </div>
    );
};
