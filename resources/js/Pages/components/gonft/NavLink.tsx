import { Link } from "react-scroll";

type NavLinkType = {
    section: string;
    activeSection: string;
    content: string;
    link?: string;
    className?: string;
    activeColor?: string;
    inactiveColor?: string;
    handleClick?: () => void;
};

export default function NavLink({
    section,
    activeSection,
    content,
    link,
    className,
    activeColor = 'text-cyber-800',
    inactiveColor = 'text-zinc-500',
    handleClick
}: NavLinkType): JSX.Element
{
    return (
        <div className="center flex-col text-sm cursor-pointer">
            <Link
                to={link ?? ''}
                smooth={true}
                duration={700}
                onClick={handleClick}
                className={`${
                    activeSection === section
                        ? `${activeColor} font-semibold`
                        : inactiveColor
                } ${className}`}
            >
                {content}
            </Link>

            <div
                className={`w-3 h-1 bg-cyber-800 rounded-full ${
                    activeSection !== section && "hidden"
                }`}
            ></div>
        </div>
    );
}
